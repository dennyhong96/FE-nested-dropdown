import "core-js/stable";
import "regenerator-runtime/runtime";

import "../sass/main.scss";

const menuOpenBtn = document.querySelector(".nav__toggle--menu");
const menuCloseBtn = document.querySelector(".nav__toggle--close");
const nav = document.querySelector(".nav");

[menuOpenBtn, menuCloseBtn].forEach((btn) =>
  btn.addEventListener("click", function () {
    nav.classList.toggle("nav--active");
  })
);
