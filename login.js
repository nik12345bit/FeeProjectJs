// ============================================================
// LOGIN.JS — Syllabus topics:
//   var · let · const · String/Number/Boolean · null/undefined
//   Symbol · BigInt · console.log/warn/error/table
//   if/else · for...in · for...of · while · do...while
//   break · continue · ternary · logical operators
//   function declaration · arrow function · default params
//   rest params · call by value · closure · try/catch
//   JSON.stringify · Object destructuring · Array destructuring
//   DOM: createElement/appendChild/remove · addEventListener
//   form validation · setTimeout (BOM) · window.alert/prompt
// ============================================================

// ── Data Types ──────────────────────────────────────────────
var submitAttempts = 0;                          // var (function-scoped)
const SITE_NAME = "MedicalCare";                 // const (immutable)
let isFormReady = false;                         // let (mutable)

const patientSymbol = Symbol("patientID");       // Symbol — unique identifier
const MAX_PATIENTS = BigInt(9999999999999);      // BigInt — large number
console.log("Symbol:", patientSymbol.toString());
console.log("BigInt max patients:", MAX_PATIENTS);

// ── Closure: private session counter ────────────────────────
function makeCounter() {
    let count = 0;
    return function () { count++; return count; };
}
const sessionBookingCount = makeCounter();

// ── Default parameter ────────────────────────────────────────
function greetUser(name = "Patient") {
    console.log("Welcome to " + SITE_NAME + ", " + name + "!");
}

// ── Rest parameters (...args) ────────────────────────────────
function logFields(...fields) {
    console.log("Fields received:", fields.length);
    // while loop: process each field
    let i = 0;
    while (i < fields.length) {
        if (!fields[i]) {
            console.warn("Empty field at index " + i);  // console.warn
        }
        i++;
    }
}

// ── Form validation ──────────────────────────────────────────
function validateForm(patient) {
    console.table(patient);                      // console.table

    // for...in: check each key
    for (let key in patient) {
        if (!patient[key]) {
            console.error("Missing: " + key);   // console.error
            return false;
        }
    }

    // do...while: keep checking age until valid format
    let ageCheck = Number(patient.age);
    do {
        if (isNaN(ageCheck) || ageCheck <= 0 || ageCheck > 120) {
            console.warn("Invalid age: " + ageCheck);
            return false;
        }
        break;   // break: exit loop once valid
    } while (false);

    // Phone validation with continue (skip non-digit chars, count digits)
    const phoneDigits = patient.phone.split("");
    let digitCount = 0;
    for (const ch of phoneDigits) {
        if (isNaN(ch) || ch === " ") continue;  // continue: skip non-digits
        digitCount++;
    }
    if (digitCount < 10) {
        console.error("Phone number too short:", digitCount, "digits");
        return false;
    }

    console.log("Validation passed ✓");
    return true;
}

// ── Pre-fill doctor if coming from doctor.html ───────────────
window.addEventListener("DOMContentLoaded", function () {

    // window.prompt: ask preferred appointment time (BOM)
    const prefTime = window.prompt(
        "Welcome! What is your preferred appointment time?\n(e.g. 10:00 AM, 2:00 PM)",
        "10:00 AM"
    );

    // null check on prompt result (user pressed Cancel → null)
    if (prefTime !== null && prefTime.trim() !== "") {
        console.log("Preferred time:", prefTime);
        // Store for dashboard use
        localStorage.setItem("preferredTime", prefTime);
    } else {
        console.warn("No preferred time entered.");
        localStorage.setItem("preferredTime", "Not specified");
    }

    // Pre-fill doctor from URL param (doctor.html → login.html)
    const urlParams = new URLSearchParams(window.location.search);
    const preDoctor = urlParams.get("doctor");
    if (preDoctor) {
        const doctorSelect = document.getElementById("doctor");
        let matched = false;
        // for...of: loop options to find a match
        for (const option of doctorSelect.options) {
            // Match by checking if the option value contains the doctor name
            if (option.value === preDoctor || option.text.startsWith(preDoctor.split(" - ")[0])) {
                option.selected = true;
                matched = true;
                break;   // break: stop once found
            }
        }
        if (!matched) console.warn("Doctor not found in dropdown:", preDoctor);
        else {
            // Highlight the pre-filled field
            doctorSelect.closest(".input-box").style.borderColor = "#27ae60";
            doctorSelect.closest(".input-box").style.background = "#f0fff4";
        }
    }

    isFormReady = true;
    console.log("Form ready:", isFormReady);
});

// ── Main submit ──────────────────────────────────────────────
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    submitAttempts++;

    const patient = {
        name:    document.getElementById("name").value.trim(),
        age:     document.getElementById("age").value,
        gender:  document.getElementById("gender").value,
        phone:   document.getElementById("phone").value.trim(),
        disease: document.getElementById("disease").value.trim(),
        doctor:  document.getElementById("doctor").value,
        time:    localStorage.getItem("preferredTime") || "Not specified"
    };

    // Object destructuring
    const { name, doctor } = patient;
    greetUser(name);

    // Rest params demo
    logFields(...Object.values(patient));

    if (!validateForm(patient)) {
        showToast("Please fill all fields correctly.", "error");
        return;
    }

    // Sanitize inputs before saving
    function sanitize(str) { return String(str).replace(/[<>"']/g, ""); }
    Object.keys(patient).forEach(k => { patient[k] = sanitize(patient[k]); });

    // Disable button to prevent double-submit
    const bookBtn = document.getElementById("bookBtn");
    if (bookBtn) {
        bookBtn.disabled = true;
        bookBtn.innerHTML = '<i class="ri-loader-4-line"></i> Booking...';
    }

    // Array destructuring: split doctor name and specialty
    const [docTitle, docName, , docSpecialty] = doctor.split(" ");
    console.log("Booking with:", docTitle, docName, "| Specialty:", docSpecialty);

    try {
        localStorage.setItem("patientData", JSON.stringify(patient));

        // Shallow copy demo
        const patientCopy = Object.assign({}, patient);
        patientCopy.status = "Confirmed";
        console.log("Saved copy:", patientCopy);

        const num = sessionBookingCount();
        showToast("Appointment #" + num + " booked for " + name + "! Redirecting...", "success");

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

// ── Toast helper (createElement + remove) ───────────────────
function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.textContent = (type === "success" ? "✅ " : "❌ ") + message;
    toast.style.cssText = `
        position:fixed;top:24px;left:50%;transform:translateX(-50%);
        background:${type === "success" ? "#0a4ba8" : "#c0392b"};
        color:white;padding:14px 28px;border-radius:10px;
        font-size:.95rem;font-weight:600;
        box-shadow:0 4px 20px rgba(0,0,0,0.25);
        z-index:9999;max-width:90%;text-align:center;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);   // .remove() — delete node
}

// ── Scroll into view on click ────────────────────────────────
const inputs = document.querySelectorAll(".input-box");
for (const input of inputs) {
    input.addEventListener("click", () => {
        input.scrollIntoView({ behavior: "smooth", block: "center" });
    });
}
