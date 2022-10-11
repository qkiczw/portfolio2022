// console.log("Hello World!!!");

const navbarToggleButton = document.querySelector(".navbar__toggle-button");
const navbarLinks = document.querySelector(".navbar__links");

navbarToggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
});

// swiper
const swiper = new Swiper(".swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
