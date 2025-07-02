// main.js

const headers = document.querySelectorAll(".header-menu");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  headers.forEach((header) => {
    if (currentScroll > 150 && !header.classList.contains(toggleClass)) {
      header.classList.add(toggleClass);
    } else if (
      currentScroll <= 150 &&
      header.classList.contains(toggleClass)
    ) {
      header.classList.remove(toggleClass);
    }
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
    },
  });
});
