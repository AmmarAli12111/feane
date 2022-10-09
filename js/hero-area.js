const searchLink = document.querySelector(".nav_search-btn");
const Links = document.querySelector(".links");
const toggler = document.querySelector(".navbar-toggler");

const navLinks = document.querySelectorAll(".nav-link");
const bodyId = document.querySelector("body").id;
const Link = document.querySelector(".links .home");

navLinks.forEach((link) => {
  if (link.classList.contains(bodyId)) {
    link.classList.add("active");
  }
  if (window.location.pathname === "/feane/") {
    Link.classList.add("active");
  }
});

searchLink.addEventListener("click", () => {
  searchLink.classList.toggle("show-input");
});
toggler.addEventListener("click", () => {
  toggler.classList.toggle("expanded");
  Links.classList.toggle("show");
});

let carousels = document.querySelectorAll(".carousel-item ");
let numberScarousels = carousels.length;
let indicators = document.querySelectorAll(".carousel-indicators li");
let counter = 0;

setInterval(() => {
  carousels.forEach((carousel) => {
    carousel.classList.remove("active");
  });
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
  counter++;
  if (counter > numberScarousels - 1) {
    counter = 0;
  }
  carousels[counter].classList.add("active");
  indicators[counter].classList.add("active");
}, 32000);

indicators.forEach((indicator) => {
  indicator.onclick = function () {
    carousels.forEach((carousel) => {
      carousel.classList.remove("active");
    });
    carousels[this.classList.item(0)].classList.add("active");
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });
    this.classList.add("active");
  };
});
