// console.log("Hello World!!!");

const navbarToggleButton = document.querySelector(".navbar__toggle-button");
const navbarLinks = document.querySelector(".navbar__links");

navbarToggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
});
