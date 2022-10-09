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
