// ============================================================
// LOGIN.JS — Syllabus topics covered:
//   var · let · const · String/Number/Boolean · null/undefined
//   Symbol · BigInt · console.log/warn/error/table
//   if/else · for...in · for...of · while · do...while
//   break · continue · ternary · logical operators
//   function declaration · arrow function · default params
//   rest params · call by value · closure · try/catch
//   JSON.stringify · Object destructuring · Array destructuring
//   DOM: createElement/appendChild/remove · addEventListener
//   form validation · setTimeout (BOM) · window.alert
// ============================================================

// ── 1. DATA TYPES ────────────────────────────────────────────
var submitAttempts = 0;                          // var (function-scoped)
const SITE_NAME    = "MedicalCare";              // const (immutable)
let isFormReady    = false;                      // let (mutable)

const patientSymbol = Symbol("patientID");       // Symbol
const MAX_PATIENTS  = BigInt(9999999999999);     // BigInt
console.log("Symbol:", patientSymbol.toString());
console.log("BigInt max patients:", MAX_PATIENTS);

// Boolean type
const isProduction = true;
const isDebug      = false;
console.log("Production mode:", isProduction, "| Debug:", isDebug);

// ── 2. CLOSURE: private session counter ──────────────────────
function makeCounter() {
    let count = 0;                              // private variable via closure
    return function () { count++; return count; };
}
const sessionBookingCount = makeCounter();      // closure in action

// ── 3. DEFAULT PARAMETER ─────────────────────────────────────
function greetUser(name = "Patient") {
    console.log(`Welcome to ${SITE_NAME}, ${name}!`);
}

// ── 4. REST PARAMETERS ───────────────────────────────────────
function logFields(...fields) {
    console.log("Fields received:", fields.length);
    // while loop: iterate each field
    let i = 0;
    while (i < fields.length) {
        if (!fields[i]) console.warn("Empty field at index " + i); // console.warn
        i++;
    }
}

// ── 5. FORM VALIDATION ───────────────────────────────────────
function validateForm(patient) {
    console.table(patient);                     // console.table

    // for...in: check every key
    for (let key in patient) {
        if (!patient[key]) {
            console.error("Missing:", key);     // console.error
            return false;
        }
    }

    // do...while: validate age
    let ageCheck = Number(patient.age);
    do {
        if (isNaN(ageCheck) || ageCheck <= 0 || ageCheck > 120) {
            console.warn("Invalid age:", ageCheck);
            return false;
        }
        break;                                  // break: exit once valid
    } while (false);

    // for...of with continue: count phone digits, skip non-digits
    let digitCount = 0;
    for (const ch of patient.phone.split("")) {
        if (isNaN(ch) || ch === " ") continue; // continue: skip non-digits
        digitCount++;
    }
    if (digitCount < 7) {
        console.error("Phone too short:", digitCount, "digits");
        return false;
    }

    console.log("Validation passed ✓");
    return true;
}

// ── 6. DOM READY ─────────────────────────────────────────────
window.addEventListener("DOMContentLoaded", function () {

    // Store a default preferred time (no intrusive prompt for presentation)
    if (!localStorage.getItem("preferredTime")) {
        localStorage.setItem("preferredTime", "10:00 AM");
    }

    // Pre-fill doctor from URL param (doctor.html → login.html)
    const urlParams = new URLSearchParams(window.location.search);
    const preDoctor = urlParams.get("doctor");

    if (preDoctor) {
        const doctorSelect = document.getElementById("doctor");
        let matched = false;

        // for...of: loop through all options
        for (const option of doctorSelect.options) {
            if (option.value === preDoctor ||
                option.text.startsWith(preDoctor.split(" - ")[0])) {
                option.selected = true;
                matched = true;
                break;                          // break: stop once matched
            }
        }

        // Ternary: conditional feedback
        matched
            ? console.log("Doctor pre-selected:", preDoctor)
            : console.warn("Doctor not found:", preDoctor);

        if (matched) {
            const box = doctorSelect.closest(".input-box");
            if (box) {
                box.style.borderColor = "#27ae60";
                box.style.background  = "#f0fff4";
            }
        }
    }

    isFormReady = true;
    console.log("Form ready:", isFormReady, "| undefined check:", typeof isFormReady !== "undefined");
});

// ── 7. FORM SUBMIT ───────────────────────────────────────────
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    submitAttempts++;                           // increment attempt count

    // Object literal
    const patient = {
        name:    document.getElementById("name").value.trim(),
        age:     document.getElementById("age").value,
        gender:  document.getElementById("gender").value,
        phone:   document.getElementById("phone").value.trim(),
        disease: document.getElementById("disease").value.trim(),
        doctor:  document.getElementById("doctor").value,
        time:    localStorage.getItem("preferredTime") || "10:00 AM"
    };

    // Object destructuring
    const { name, doctor } = patient;
    greetUser(name);                            // default param function

    // Rest params — spread object values
    logFields(...Object.values(patient));

    // Logical AND: both must be truthy
    const canSubmit = isFormReady && submitAttempts > 0;
    console.log("Can submit:", canSubmit);

    if (!validateForm(patient)) {
        showToast("Please fill all fields correctly.", "error");
        return;
    }

    // Sanitize: arrow function
    const sanitize = (str) => String(str).replace(/[<>"']/g, "");
    Object.keys(patient).forEach(k => { patient[k] = sanitize(patient[k]); });

    // Disable button (prevent double-submit)
    const bookBtn = document.getElementById("bookBtn");
    if (bookBtn) {
        bookBtn.disabled = true;
        bookBtn.innerHTML = '<i class="ri-loader-4-line"></i> Booking...';
    }

    // Array destructuring: split doctor string
    const [docTitle, docName, , docSpecialty] = doctor.split(" ");
    console.log("Booking:", docTitle, docName, "| Specialty:", docSpecialty);

    // null & undefined demo
    let userToken  = null;        // intentionally null
    let sessionAge = undefined;   // not yet assigned
    console.log("token null?", userToken === null, "| age undefined?", sessionAge === undefined);

    try {
        // JSON.stringify to save
        localStorage.setItem("patientData", JSON.stringify(patient));

        // Shallow copy (Object.assign)
        const patientCopy    = Object.assign({}, patient);
        patientCopy.status   = "Confirmed";
        console.log("Shallow copy status:", patientCopy.status);
        console.log("Original unchanged:", patient.status);  // undefined

        const bookingNum = sessionBookingCount();             // closure counter
        showToast(`Appointment #${bookingNum} booked for ${name}! Redirecting…`, "success");

        // setTimeout (BOM): redirect after delay
        setTimeout(() => { window.location.href = "dashboard.html"; }, 1800);

    } catch (err) {
        console.error("Save failed:", err);
        showToast("Something went wrong. Try again.", "error");
        if (bookBtn) {
            bookBtn.disabled = false;
            bookBtn.innerHTML = 'Book Appointment <i class="ri-arrow-right-line"></i>';
        }
    }
});

// ── 8. TOAST HELPER — createElement + appendChild + remove ───
function showToast(message, type = "success") {
    const toast = document.createElement("div");   // createElement
    toast.textContent = (type === "success" ? "✅ " : "❌ ") + message;
    toast.style.cssText = `
        position:fixed;top:24px;left:50%;transform:translateX(-50%);
        background:${type === "success" ? "#0a4ba8" : "#c0392b"};
        color:white;padding:14px 28px;border-radius:12px;
        font-size:.93rem;font-weight:600;
        box-shadow:0 6px 28px rgba(0,0,0,.25);
        z-index:9999;max-width:90%;text-align:center;
        animation:toastIn .3s ease;
    `;
    document.body.appendChild(toast);              // appendChild
    setTimeout(() => toast.remove(), 3500);         // .remove() — delete node

    if (!document.getElementById('toast-style')) {
        const s = document.createElement('style');
        s.id = 'toast-style';
        s.textContent = `@keyframes toastIn{from{opacity:0;transform:translateX(-50%) translateY(-12px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}`;
        document.head.appendChild(s);
    }
}

// ── 9. SMOOTH SCROLL on input click ─────────────────────────
const inputs = document.querySelectorAll(".input-box");
for (const input of inputs) {
    input.addEventListener("click", () => {
        input.scrollIntoView({ behavior: "smooth", block: "center" });
    });
}
