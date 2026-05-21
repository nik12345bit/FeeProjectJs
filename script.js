/* =================GOOGLE FONT================== */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

/*==================== VARIABLES CSS ====================*/
:root {
  --header-height: 3.5rem;

  /*========== Colors ==========*/
  /*Color mode HSL(hue, saturation, lightness)*/
  --first-color: hsl(218, 94%, 45%);
  --first-color-alt: hsl(218, 100%, 40%);
  --second-color: hsl(200, 85%, 64%);
  --title-color: hsl(218, 48%, 22%);
  --text-color: hsl(218, 8%, 36%);
  --text-color-light: hsl(218, 8%, 54%);
  --white-color: hsl(240, 3%, 72%);
  --white-color-light: hsl(218, 48%, 80%);
  --dark-color: hsl(218, 68%, 18%);
  --gray-color: hsl(0, 0%, 92%);
  --body-color: hsl(0, 0%, 100%);

  /*========== Font and typography ==========*/
  /* .5rem = 8px | 1rem = 16px */
  --body-font: "Montserrat", sans-serif;

  --biggest-font-size: 2.25rem;
  --bigger-font-size: 1.75rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: .938rem;
  --small-font-size: .813rem;

  /*========== Font weight ==========*/
  --font-regular: 400;
  --font-medium: 500;
  --font-semi-bold: 600;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
}

/*========== Responsive typography ==========*/
@media screen and (min-width: 1150px) {
  :root {
    --biggest-font-size: 3.5rem;
    --bigger-font-size: 3rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: .875rem;
  }
}

/*==================== BASE ====================*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
  transition: background-color .4s;
}

h1,
h2,
h3,
h4 {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
  text-align: center;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

/*========== THEME ==========*/
/*========== Variables Dark theme ==========*/
.dark-theme {
  --title-color: hsl(218, 48%, 95%);
  --text-color: hsl(218, 24%, 75%);
  --gray-color: hsl(218, 24%, 20%);
  --body-color: hsl(218, 24%, 8%);
}

/*========== 
   Color changes in some parts of 
   the website, in dark theme 
==========*/

.dark-theme :is(.shadow-header, .scrollup) {
  box-shadow: 0 2px 16px hsla(218, 68%, 4%, .7);
}

.dark-theme .nav__menu {
  box-shadow: 0 4px 16px hsla(218, 68%, 4%, .7);
}

.dark-theme .prices__card {
  background-color: var(--white-color);
}

.dark-theme .prices__item span{
  background-color: var()
}

.dark-theme::-webkit-scrollbar {
  background-color: hsl(218, 8%, 12%);
}

.dark-theme::-webkit-scrollbar-thumb {
  background-color: hsl(218, 8%, 20%);
}

.dark-theme::-webkit-scrollbar-thumb:hover {
  background-color: hsl(218, 8%, 30%)
}


/*========== REUSABLE CSS CLASSES ==========*/
.container {
  max-width: 1120px;
  margin-inline: 1.5rem;
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.section {
  padding-block: 5rem 1rem;
  
}


.section__title {

  font-size: var(--bigger-font-size);
  margin-bottom: 1rem;
  color:rgb(233, 232, 241)
  
  
}

.section__title span {

  text-align: center;
  font-size: var(--bigger-font-size);
  margin-bottom: 1rem;
  color: #162990;
  background: var(--body-color);
  
  
}


.main {
  overflow: hidden;
}

/*========== HEADER & NAV ==========*/

.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--body-color);
  z-index: var(--z-fixed);
  transition: background-color .4s, box-shadow .4s;
}

.nav {
  position: relative;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}




.nav__logo {
  display: flex;
  align-items: center;
  column-gap: .25rem;
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
  transition: color .4s;
}

.nav__logo i {
  font-weight: initial;
  font-size: 1.5rem;
  color: var(--first-color);
}

.nav__logo:hover {
  color: var(--first-color);
}

.nav__toggle,
.nav__close,
.nav__theme {
  display: inline-flex;
  font-size: 1.25rem;
  cursor: pointer;
  color: var(--title-color);
  transition: color .4s;
}

.nav__buttons {
  display: flex;
  align-items: center;
  column-gap: 1rem;
}

.nav__login {
  background: linear-gradient(135deg, #0a4ba8, #1c8dfc);
  color: white;
  padding: 6px 14px;
  border-radius: 8px;
  transition: 0.3s;
}

.nav__login:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

/* Navigation for mobile devices */
@media screen and (max-width: 1150px) {
  .nav__menu {
    position: fixed;
    top: -120%;
    left: 0;
    width: 100%;
    background-color: var(--body-color);
    box-shadow: 0 4px 16px hsla(218, 68%, 18%, .1);
    padding-block: 5rem;
    transition: top .4s;
  }
}

.nav__list {
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}

.nav__link {
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  transition: color .4s;
}

.nav__link:hover {
  color: var(--first-color);
}

.nav__close {
  position: absolute;
  top: 1rem;
  right: 1.5rem;
}

/* Show menu */
.show-menu {
  top: 0;
}

/* Add shadow header */
.shadow-header {
  box-shadow: 0 2px 16px hsla(218, 68%, 18%, .1);
}

/* Active link */

/*=============== BREAKPOINTS ===============*/

/* For small devices */
@media screen and (max-width: 360px) {
  .container {

    margin-inline: 1rem;
  }

  .section__title {
    font-size: 1.5rem;
  }

  .prices .swiper {
    width: 280px;
  }

  .contact__map {
    width: 100%;
  }
}

@media screen and (max-width: 330px) {
  .home__title {
    font-size: 1.8rem;
  }

  .home__icons {
    flex-direction: column;
  }


  .delivery__img {
    width: 270px;
  }

  .about__container {
    padding-inline: 1rem;
  }


  .prices .swiper {
    width: 280px;
  }

  .footer__links {
    column-gap: 1.5rem;
  }
}

/* For medium devices */
@media screen and (min-width: 440px) {

  .home__container,
  .delivery__container,
  .contact__container {
    grid-template-columns: 350px;
    justify-content: center;
  }

  .about__containe,
  .prices__container {
    width: 350px;
    margin-inline: auto;
  }

  .gallery__container {
    grid-template-columns: repeat(2, 190px);
    justify-content: center;
    margin-inline: auto;
  }
}

@media screen and (min-width: 768px) {
  .home__container {
    grid-template-columns: repeat(2, 350px);
    row-gap: 2rem;
  }

  .home__data {
    grid-column: 2/3;
    text-align: initial;
  }

  .home__content {
    grid-column: 1/3;
    grid-row: 2/3;
    grid-template-columns: repeat(2, 1fr);
    padding: 0 5rem;
  }


  .home__info {
    order: 1;
    padding-block: 2rem;
  }

  .home__image {
    position: relative;
  }

  .home__img {
    position: absolute;
    bottom: 0;
    width: 300px;
  }

  .delivery__container {
    grid-template-columns: repeat(2, 350px);
    align-items: center;
  }

  .delivery__data .section__title,
  .delivery__description {
    text-align: initial;
  }

  .delivery__data {
    order: 1;
  }

  .about__container {
    width: 700px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .about__data,
  .section__title,
  .about__description {
    text-align: initial;
  }

  .about__info {
    justify-items: flex-start;
  }

  .about__stat {
    padding-right: 1.5rem;
  }

  .about__button {
    justify-self: flex-start;
  }

  .prices__container {
    width: 700px;
  }

  .prices__description {
    width: 540px;
    margin-inline: auto;
  }

  .prices__box {
    width: 460px;
  }

  .prices__content {
    overflow-x: clip;
  }

  .contact__container {
    grid-template-columns: repeat(2, 350px);
    align-items: center;
  }

  .contact__data .section__title,
  .contact__description {
    text-align: initial;
  }

  .contact__info {
    grid-template-columns: repeat(2, 1fr);
    justify-items: flex-start;
  }
}

/* For large devices */
@media screen and (min-width: 1150px) {
  .container {
    margin-inline: auto;
  }

  .section {
    padding-block: 7rem 2rem;
  }

  .section__title {
    margin-bottom: 1.5rem;
  }

  .nav {
    height: calc(var(--header-height) + 2rem);
  }

  .nav__toggle,
  .nav__close {
    display: none;
  }

  .nav__list {
    flex-direction: row;
    column-gap: 4rem;
  }


  /* .dark-theme .nav__menu {
  box-shadow: none;
} */

  .home__container {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding-top: 4rem;
  }

  .home__title {
    margin-bottom: 1.5rem;
  }

  .home__description {
    padding-right: 10rem;
    margin-bottom: 3rem;
  }

  .home__content {
    column-gap: 3rem;
  }

  .home__img {
    width: 440px;
  }


  .home__name {
    font-size: var(--h1-font-size);
  }

  .home__profession {
    font-size: var(--normal-font-size);
    margin-bottom: 3rem;
  }

  .home__box {
    width: 88px;
    height: 88px;
    font-size: 2.5rem;
  }

  .home__button {
    padding: 7rem 2rem;
    border-radius: 1rem;
  }

  .delivery__info {
    grid-template-columns: repeat(3, 180px);
    column-gap: 4rem;
    padding-bottom: 7rem;
  }

  .delivery__icon {
    margin-bottom: .75rem;
  }

  .delivery__subtitle {
    font-size: var(--normal-font-size);
  }


  .about__container {
    width: initial;
    grid-template-columns: 440px 320px;
    justify-content: center;
    column-gap: 10rem;
    padding-block: 3rem;
  }

  .about__stat {
    padding-right: 2.5rem;
  }

  .about__number {
    margin-bottom: .5rem;
  }

  .about__details {
    font-size: var(--normal-font-size);
  }

  .about__img {
    width: 320px;
  }

  .prices__container {
    row-gap: 4rem;
  }

  .prices__box {
    width: 660px;
    border-radius: 2rem;
  }

  .prices__details {
    font-size: var(--normal-font-size);
    padding-bottom: 2.5rem;
  }

  .prices .swiper {
    width: 460px;
    padding-block: 2.5rem 7rem;
  }

  .prices__heading {
    padding: 1.5rem;
  }

  .prices__number {
    font-size: var(--h1-font-size);
  }

  .prices__list {
    padding: 2rem 1.5rem 3.5rem;
    row-gap: 1rem;
  }

  .prices__item {
    font-size: var(--normal-font-size);
  }

  .prices__box::after {
    width: 100px;
    height: 100px;
    filter: blur(60px);
  }

  .gallery__container {
    grid-template-columns: repeat(2, 400px);
    gap: 2rem;
  }

  .gallery__image:nth-child(1) {
    height: 400px;
  }

  .contact__container {
    grid-template-columns: 440px 450px;
    column-gap: 10rem;
  }

  .contact__description {
    margin-bottom: 3rem;
  }

  .contact__info {
    gap: 4rem 6rem;
  }

  .contact__icon {
    margin-bottom: .75rem;
  }

  .contact__subtitle {
    font-size: var(--normal-font-size);
    margin-bottom: .75rem;
  }

  .contact__map {
    width: 450px;
    height: 450px;
    border-radius: 2rem;
  }

  .footer {
    padding-top: 6rem;
  }

  .footer__container {
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }

  .footer__logo {
    margin-bottom: 0;
    font-size: var(--h2-font-size);
    justify-self: flex-start;
  }

  .footer__social {
    justify-self: flex-end;
  }

  .footer__link {
    font-size: var(--normal-font-size);
  }

  .scrolling {
    right: 3rem;
  }
}
/* ===== DARK THEME FULL FIX ===== */
body.dark-theme {
  background-color: #0b1c2c;
  color: #e6f0ff;
}

/* Navbar */
.dark-theme .header {
  background-color: #081521;
}

/* Sections background */
.dark-theme .section {
  background-color: #0b1c2c;
}

/* Cards / containers */
.dark-theme .home__container,
.dark-theme .delivery__container,
.dark-theme .about__container,
.dark-theme .prices__container,
.dark-theme .contact__container {
  background-color: transparent;
}

/* Text colors */
.dark-theme h1,
.dark-theme h2,
.dark-theme h3,
.dark-theme p {
  color: #e6f0ff;
}

/* Buttons */
.dark-theme .button,
.dark-theme .button-dark {
  background: linear-gradient(135deg, #1c8dfc, #0a4ba8);
  color: white;
}

/* Doctor / card sections */
.dark-theme .doctor__card {
  background: #112a44;
  color: white;
}

/* Inputs / forms */
.dark-theme input,
.dark-theme select {
  background: #112a44;
  color: white;
}

/* Footer */
.dark-theme .footer {
  background: #081521;
}

/*==================== BUTTON ====================*/
.button {
  display: inline-flex;
  background-color: var(--first-color);
  color: var(--white-color);
  font-weight: var(--font-semi-bold);
  padding: 1rem 2rem;
  border-radius: .75rem;
  box-shadow: 0 4px 16px hsla(218, 94%, 45%, .3);
  transition: background-color .4s;
}

.button:hover {
  background-color: var(--first-color-alt);
}

.button-dark {
  position: relative;
  background: linear-gradient(var(--dark-color), var(--dark-color)),
    linear-gradient(225deg, var(--second-color) 0%, var(--dark-color) 100%);
  border: 3px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  color: var(--white-color);
  font-weight: var(--font-semi-bold);
  padding: 1rem 2rem;
  border-radius: .75rem;
  display: flex;
  align-items: center;
  gap: .5rem;
  box-shadow: 0 4px 16px hsla(218, 68%, 18%, .4);
  overflow: hidden;
}

.button-dark::after {
  content: '';
  width: 40px;
  height: 40px;
  background-color: var(--second-color);
  border-radius: 50%;
  position: absolute;
  top: -.5rem;
  right: -.5rem;
  filter: blur(25px);
}

.button-dark i {
  font-size: 1.5rem;
  transition: transform .4s;
}

.button-dark:hover i {
  transform: translateX(.25rem);
}


/*==================== HOME ====================*/
.home__container {
  row-gap: 4rem;
  padding-top: 2rem;
}

.home__data {
  text-align: center;
}

.home__title {
  font-size: var(--biggest-font-size);
  margin-bottom: 1rem;
}

.home__title span {
  font-weight: var(--font-regular);
}

.home__description {
  margin-bottom: 2rem;
}

.home__content {
  background-color: var(--first-color);
  padding: 3rem 1.5rem 0 1rem;
  border-radius: 2rem;
  box-shadow: 0 8px 16px hsla(218, 94%, 45%, .2);
  row-gap: 2rem;
}

.home__info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: .75rem;
}

.home__name {
  font-size: var(--h2-font-size);
  color: var(--white-color);
  margin-bottom: .5rem;
}

.home__profession {
  font-size: var(--small-font-size);
  font-weight: var(--font-regular);
  color: var(--white-color);
  margin-bottom: 2rem;
}

.home__icons {
  display: flex;
  gap: .75rem;
}

.home__box {
  background-color: var(--first-color-alt);
  color: var(--white-color);
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: .75rem;
  font-size: 2rem;
}

.home__button {
  flex-direction: column;
  padding: 4rem 1rem;
}

.home__img {
  width: 220px;
  justify-self: center;
  filter: drop-shadow(0 16px 16px hsla(218, 68%, 18%, .3));
}

/*==================== DELIVERY ====================*/


.delivery__container {
  row-gap: 3rem;
}

.delivery__data {
  overflow: hidden;
}

.delivery__description {
  text-align: center;
  margin-bottom: 2rem;
}

.delivery__info {
  display: grid;
  grid-template-columns: repeat(3, 140px);
  column-gap: 2.5rem;
  overflow: auto;
  padding-bottom: 2rem;
}

.delivery__info::-webkit-scrollbar {
  background-color: var(--gray-color);
  height: 4px;
  border-radius: 1rem;
}

.delivery__info::-webkit-scrollbar-thumb {
  background-color: var(--first-color);
  border-radius: 1rem;
}

.delivery__icon {
  width: 48px;
  height: 48px;
  background-color: var(--first-color);
  color: var(--white-color);
  border: 4px solid var(--gray-color);
  border-radius: 1rem;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  margin-bottom: .5rem;
  transition: border-color .4s;
}

.delivery__subtitle {
  font-size: var(--h3-font-size);
  margin-bottom: .5rem;
}

.delivery__content {
  width: 250px;
  background-color: var(--first-color);
  padding-block: 3rem 2rem;
  border-radius: 2rem;
  text-align: center;
  justify-self: center;
  display: grid;
  justify-items: center;
  box-shadow: 0 8px 16px hsla(218, 94%, 45%, .2);
}

.delivery__title {
  font-size: var(--h1-font-size);
  color: var(--white-color);
  margin-bottom: 1.5rem;
}

.delivery__patients {
  background-color: var(--first-color-alt);
  color: var(--white-color);
  padding: 1rem 2rem;
  border-radius: .75rem;
  display: flex;
  column-gap: .5rem;
}

.delivery__patients span {
  font-weight: var(--font-semi-bold);
}

.delivery__title {
  font-size: var(--h1-font-size);
  color: var(--white-color);
  margin-bottom: 1.5rem;
}

.delivery__patients {
  background-color: var(--first-color-alt);
  color: var(--white-color);
  padding: 1rem 2rem;
  border-radius: .75rem;
  display: flex;
  column-gap: .5rem;
}

.delivery__image {
  position: relative;
  width: 100%;
  height: 186px;
  margin-bottom: 2rem;
  display: grid;
}

.delivery__img {
  position: absolute;
  max-width: initial;
  width: 300px;
  justify-self: center;
  filter: drop-shadow(0 16px 24px hsla(218, 68%, 18%, .6));
}

/*==================== ABOUT ====================*/
.about__container {
  background-color: var(--dark-color);
  padding: 3rem 1.5rem 2rem;
  row-gap: 3rem;
  border-radius: 2rem;
  box-shadow: 0 8px 16px hsla(218, 94%, 45%, .2);
}

.about__data {
  display: grid;
  row-gap: 3rem;
}

.about__description {
  color: var(--white-color-light);
  text-align: center;
}

.about__info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}

.about__number {
  font-size: var(--h1-font-size);
  color: var(--white-color);
  margin-bottom: .25rem;
}

.about__details {
  font-size: var(--small-font-size);
  color: var(--white-color-light);
}

.about__stat:not(:last-child) {
  border-inline-end: 2px solid var(--white-color-light);
}

.about__img {
  width: 250px;
  border-radius: 1.5rem;
  filter: drop-shadow(0 16px 24px hsla(218, 68%, 18%, .6));
  justify-self: center;
}

.about__button {
  color: var(--white-color);
  display: inline-flex;
  justify-self: center;
  align-items: center;
  column-gap: .5rem;
}

.about__button i {
  font-size: 1.5rem;
  transition: transform .4s;
}

.about__button:hover i {
  transform: translateX(.25rem);
}

/*==================== PRICES ====================*/


.prices__container {
  padding-bottom: 4rem;
  row-gap: 3rem;
}

.prices__content {
  display: grid;
  position: relative;
}

.prices__description {
  text-align: center;
}

/* Example Card Styles */
.prices__card {
  padding: 2rem 1.5rem;
  border-radius: 1rem;
  background-color: #fff;
  /* or your theme var */
  text-align: center;
  transition: transform .4s;
}

.prices__card:hover {
  transform: translateY(-.5rem);
}

.prices__title {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.prices__number {
  font-size: 2rem;
  font-weight: 600;
}

.prices__card {
  width: 304px;
  background-color: var(--body-color);
  box-shadow: 0 4px 16px hsla(218, 68%, 18%, .2);
  border-radius: 1rem;
}

.prices__heading {
  background-color: var(--first-color);
  padding: 1.5rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem 1rem 0 0;
}

.prices__number {
  font-size: var(--bigger-font-size);
  color: var(--white-color);
  margin-bottom: .5rem;
}

.prices__title {
  font-size: var(--h3-font-size);
  color: var(--white-color);
  align-self: flex-end;
}

.prices__list {
  display: grid;
  row-gap: .5rem;
  padding: 1.5rem 1rem;
}

.prices__item {
  display: flex;
  column-gap: .25rem;
  font-size: var(--small-font-size);
}

.prices__item i {
  color: var(--first-color);
  font-size: 1rem;
}

.prices__box {
  display: grid;
  width: 230px;
  height: 100%;
  background: linear-gradient(var(--dark-color), var(--dark-color)),
    linear-gradient(225deg, var(--second-color) 0%, var(--first-color) 100%);
  border: 4px solid transparent;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  position: absolute;
  inset: 0;
  margin-inline: auto;
  border-radius: 1.5rem;
  box-shadow: 0 8px 16px hsla(218, 94%, 45%, .2);
  overflow: hidden;
}

.prices__box::after {
  content: '';
  width: 64px;
  height: 64px;
  background-color: var(--second-color);
  border-radius: 50%;
  position: absolute;
  top: -.5rem;
  right: -.5rem;
  filter: blur(32px);
}

.prices__details {
  color: var(--white-color);
  font-size: var(--small-font-size);
  text-align: center;
  align-self: flex-end;
  padding-bottom: 1.5rem;
}

/* Swiper class */




.prices .swiper {
  width: 320px;
  overflow: initial;
  padding-block: 2rem 5rem;
}

.prices :is(.swiper-slide-next, .swiper-slide-prev) {
  opacity: 0;
  pointer-events: none;
  transition: opacity .4s;
}


.prices .swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: -4rem;
}

.prices .swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: var(--gray-color);
  opacity: 1;
  transition: background-color .4s;
}

.prices .swiper-pagination-bullet-active {
  background-color: var(--first-color);
}

/* ===============GALLERY================ */

.gallery__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  grid-template-areas:
    "img-1 img-1"
    "img-2 img-3"
    "img-2 img-4";
}

.gallery__image:nth-child(1) {
  grid-area: img-1;
}

.gallery__image:nth-child(2) {
  grid-area: img-2;
}

.gallery__image:nth-child(3) {
  grid-area: img-3;
}

.gallery__image:nth-child(4) {
  grid-area: img-4;
}

.gallery__image {
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 8px 16px hsla(218, 94%, 45%, .1);
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform .4s;
}

.gallery__img:hover {
  transform: scale(1.2);
}

/*=============== CONTACT ===============*/
.contact__container {
  row-gap: 2rem;
  padding-bottom: 1.5rem;
}

.contact__map iframe {
  width: 100%;
  height: 100%;
}

.contact__map {
  width: 320px;
  height: 320px;
  justify-self: center;
  box-shadow: 0 8px 16px hsla(218, 94%, 45%, .2);
  border-radius: 1.5rem;
  overflow: hidden;
}

.contact__description {
  text-align: center;
  margin-bottom: 2rem;
}

.contact__info {
  display: grid;
  row-gap: 2rem;
  justify-content: center;
  text-align: center;
}

.contact__icon {
  width: 48px;
  height: 48px;
  background-color: var(--first-color);
  color: var(--white-color);
  border: 4px solid var(--gray-color);
  border-radius: 1rem;
  display: grid;
  place-items: center;
  justify-self: center;
  font-size: 1.5rem;
  margin: 0 auto .5rem;
  transition: border-color .4s;
}

.contact__subtitle {
  font-size: var(--h3-font-size);
  margin-bottom: .5rem;
}

.contact__address {
  font-style: initial;
}

.contact__social {
  display: flex;
  justify-content: center;
  column-gap: .75rem;
}

.contact__social-link {
  font-size: 1.5rem;
  color: var(--first-color);
  transition: transform .4s;
}

.contact__social-link:hover {
  transform: translateY(-.25rem);
}

/*=============== FOOTER ===============*/

.footer {
  padding-block: 3.5rem 2rem;

}

.footer__container {
  row-gap: 2rem;

}

.fooer__logo,
.footer__links,
.footer__social {
  display: flex;
}

.footer__logo {
  align-items: center;
  justify-self: center;
  column-gap: .25rem0;
  color: var(--title-color);
  font-size: var(--h1-font-size);
  font-weight: var(--font-semi-bold);
  margin-bottom: 1rem;
  transition: color .4s
}

.footer__logo i {
  font-weight: initial;
  font-size: 2rem;
  color: var(--first-color);
}

.footer__logo:hover {
  color: var(--first-color);
}

.footer__logo:hover {
  color: var(--first-color);
}

.footer__links {
  justify-content: center;
  column-gap: 3rem;
}

.footer__link {
  font-size: var(--h3-font-size);
  color: var(--title-color);
  transition: color .4s;
}

.footer__link:hover {
  color: var(--first-color);
}

.footer__social {
  justify-content: center;
  column-gap: 1rem;
}

.footer__social-link {
  font-size: 1.5rem;
  color: var(--first-color);
  transition: transform .4s;
}

.footer__social-link:hover {
  transform: translateY(-.25rem);
}

.footer__copy {
  display: block;
  margin-top: 5.5rem;
  text-align: center;
  font-size: var(--small-font-size);
  color: var(--text-color-light);
}

/*=============== SCROLL BAR ===============*/
::-webkit-scrollbar {
  width: .6rem;
  border-radius: 1rem;
  background-color: hsl(218, 16%, 90%);
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background-color: hsl(218, 16%, 80%);
}

::-webkit-scrollbar-thumb:hover {
  background-color: hsl(218, 16%, 70%);
}

/*=============== SCROLL UP ===============*/
.scrollup {
  position: fixed;
  right: 1rem;
  bottom: -50%;
  background-color: var(--body-color);
  box-shadow: 0 2px 16px hsla(218, 68%, 18%, .1);
  color: var(--title-color);
  display: inline-flex;
  padding: 6px;
  font-size: 1.25rem;
  border-radius: .5rem;
  z-index: var(--z-tooltip);
  transition: bottom .4s, transform .4s, background-color .4s, color .4s;
}

.scrollup:hover {
  transform: translateY(-.5rem);
}

/* ======show scroll up===== */

.show-scroll {
  bottom: 3rem;
}

/* ===================active link================== */

.active-link {
  color: var(--first-color);
}

/* ===================For 2K resolutions (2048 x 1152, 2048 x 1536)============================== */
@media screen and (min-width: 2048px) {
  body {
    zoom: 1.2; 
  }
}

.login-container {
  width: 300px;
  margin: 100px auto;
  text-align: center;
}

.login-container input {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}

.login-container button {
  padding: 10px 20px;
  background: blue;
  color: white;
  border: none;
}

/* ========doctor======== */


/* ===== BODY ===== */
body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #eef2ff, #f8fbff);
  margin: 0;
}

/* HEADER */
.doctor-header {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg,#0a4ba8,#020425);
  color: #f5f1f1;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.doctor-header h1 {
  font-size: 2.5rem;
  color: #eef0f4;
}

.doctor-header p {
  color: #f6e9e9;
}

/* GRID */
.doctor__container {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
  padding: 2rem;
}

/* CARD */
.doctor__card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  padding: 2rem 1.5rem;
  border-radius: 1.5rem;
  text-align: center;
  transition: all 0.4s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
}

/* Glow effect */
.doctor__card::before {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  background: rgba(42, 92, 255, 0.2);
  border-radius: 50%;
  top: -40px;
  right: -40px;
  filter: blur(40px);
}

/* Hover */
.doctor__card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

/* IMAGE */
.doctor__img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #2a5cff;
  margin-bottom: 1rem;
  transition: 0.4s;
}

.doctor__card:hover .doctor__img {
  transform: scale(1.1);
}

/* NAME */
.doctor__card h3 {
  margin: 10px 0 5px;
  font-size: 1.2rem;
  color: #1a2a44;
}

/* SPECIALIZATION */
.special {
  color: #2a5cff;
  font-weight: 600;
  margin-bottom: 10px;
}

/* TEXT */
.doctor__card p {
  font-size: 0.9rem;
  color: #555;
  margin: 4px 0;
}

/* SOCIAL */
.doctor__social {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.doctor__social i {
  font-size: 1.3rem;
  color: #2a5cff;
  cursor: pointer;
  transition: 0.3s;
}

.doctor__social i:hover {
  transform: scale(1.2);
  color: #1a35c9;
}

/* BUTTON */
/* ===== BOOK APPOINTMENT BUTTON ===== */
.book-btn{
  display: inline-block;
  margin-top: 15px;
  padding: 10px 18px;
  background: linear-gradient(135deg,#0a4ba8,#1c8dfc);
  color: #f5f1f1;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* Hover effect */
.book-btn:hover{
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

/* Click effect */
.book-btn:active{
  transform: scale(0.95);
}

/* Glow animation */
.book-btn::before{
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent);
  transition: 0.5s;
}

.book-btn:hover::before{
  left: 100%;
}
/* ===== DOCTOR PAGE — SEARCH BAR ===== */
.doc-back-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: rgba(241, 240, 249, 0.85);
    text-decoration: none;
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
    transition: 0.2s;
}
.doc-back-link:hover { color: rgb(230, 229, 239); transform: translateX(-3px); }

.doc-search-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(93, 131, 86, 0.15);
    border-radius: 12px;
    padding: 10px 16px;
    margin-top: 1.2rem;
    flex-wrap: wrap;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}
.doc-search-wrap i { color: rgb(213, 210, 224); font-size: 1.1rem; }
.doc-search-input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    color: rgb(194, 187, 208);
    font-size: 0.95rem;
    min-width: 160px;
}
.doc-search-input::placeholder { color: rgba(250, 250, 251, 0.65); }
.doc-filter-select {
    border: none;
    background: rgba(213, 197, 197, 0.2);
    color: rgb(230, 230, 241);
    border-radius: 8px;
    padding: 6px 10px;
    font-size: 0.88rem;
    outline: none;
    cursor: pointer;
}
.doc-filter-select option { color: #d5dae2; background: white; }

/* ===== CONTACT FORM ===== */
.contact__form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-top: 1.5rem;
    background: var(--container-color);
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}
.contact__form-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--title-color);
    margin-bottom: 0.2rem;
}
.contact__form-group {
    position: relative;
}
.contact__form-input,
.contact__form-textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1.5px solid #100ac4;
    border-radius: 10px;
    font-size: 0.9rem;
    font-family: inherit;
    outline: none;
    background: var(--body-color);
    color: var(--text-color);
    transition: 0.25s;
}
.contact__form-input:focus,
.contact__form-textarea:focus {
    border-color: var(--first-color);
    box-shadow: 0 0 0 3px rgba(42,92,255,0.1);
}
.contact__form-textarea { resize: vertical; min-height: 110px; }
.contact__form-error {
    font-size: 0.78rem;
    color: #c0392b;
    margin-top: 4px;
    display: none;
}
.contact__form-btn {
    padding: 13px;
    border: none;
    border-radius: 10px;
    background: linear-gradient(135deg, #0a4ba8, #1c8dfc);
    color: rgb(44, 27, 237);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}
.contact__form-btn:hover { transform: scale(1.03); box-shadow: 0 6px 18px rgba(0,0,0,0.18); }
.contact__form-success {
    display: none;
    background: #d4edda;
    color: #155724;
    border-radius: 10px;
    padding: 14px 18px;
    font-weight: 600;
    text-align: center;
}

/* ===== WHATSAPP FLOATING BUTTON ===== */
.whatsapp-float {
  position: fixed;
  bottom: 5rem;
  right: 1rem;
  width: 52px;
  height: 52px;
  background: #25D366;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.5);
  z-index: var(--z-fixed);
  transition: transform 0.3s, box-shadow 0.3s;
}
.whatsapp-float:hover {
  transform: scale(1.12) translateY(-3px);
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.6);
}

/* ===== LOGIN BACK LINK ===== */
.login-back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: rgba(255,255,255,0.85);
  text-decoration: none;
  font-size: 0.88rem;
  margin-bottom: 1.2rem;
  transition: 0.2s;
}
.login-back-link:hover { color: white; transform: translateX(-3px); }

/* ===== DOCTOR SOCIAL LINKS (fix anchor color) ===== */
.doctor__social a {
  color: #2a5cff;
  font-size: 1.3rem;
  transition: 0.3s;
  display: inline-flex;
}
.doctor__social a:hover {
  transform: scale(1.2);
  color: #1a35c9;
}

/* ===== CONTACT PHONE LINKS ===== */
.contact__address a {
  color: var(--first-color);
  text-decoration: none;
  transition: color .3s;
}
.contact__address a:hover {
  color: var(--first-color-alt);
  text-decoration: underline;
}

