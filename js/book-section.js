let selectItems = document.querySelector(".nice-select");
let listItems = document.querySelector(".nice-select .list");
let span = document.querySelector(".nice-select .current");
let arrow = document.querySelector(".nice-select .arrow");

document.addEventListener("click", addAndRemoveClass);

function addAndRemoveClass(e) {
  if (
    e.target.classList.contains("nice-select") ||
    e.target.classList.contains("current") ||
    e.target.classList.contains("arrow")
  ) {
    selectItems.classList.toggle("open");
    document.querySelector(".nice-select .selected").classList.add("focus");
  }
  if (selectItems.classList.contains("open")) {
    if (e.target !== selectItems && e.target !== span && e.target !== arrow) {
      selectItems.classList.toggle("open");
    }
  }
}

let lis = document.querySelectorAll(
  ".nice-select .list li:not(:first-of-type)"
);
let lisAll = document.querySelectorAll(".nice-select .list li");

lis.forEach((li) => {
  li.onclick = function () {
    lisAll.forEach((li) => {
      li.classList.remove("focus");
      li.classList.remove("selected");
    });
    this.classList.add("focus");
    this.classList.add("selected");
    span.innerHTML = this.innerHTML;
  };
});

var swiper = new Swiper(".slide-content", {
  slidesPerView: 2,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
