const hamburgerOpen = document.getElementById("hamburger__icon--open");
const hamburgerClose = document.getElementById("hamburger__icon--close");
const mobileMenu = document.querySelector(".navigation__mbilie--menu");
const headerLogoBox = document.getElementById("header__logo-box");

const mobileMenuOpen = () => {
  hamburgerOpen.classList.add("menu-close");
  hamburgerClose.classList.remove("menu-close");
  headerLogoBox.classList.toggle("menu-open");
  mobileMenu.classList.remove("menu-close");
};
const mobileMenuClose = () => {
  hamburgerOpen.classList.remove("menu-close");
  hamburgerClose.classList.add("menu-close");
  headerLogoBox.classList.toggle("menu-open");
  mobileMenu.classList.add("menu-close");
};
