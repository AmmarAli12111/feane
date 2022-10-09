let filtersMenu = document.querySelector(".filters-menu");
let filtersContent = document.querySelectorAll(".filters-content .col");

filtersMenu.addEventListener("click", removeAndAddClass);

function removeAndAddClass(e) {
  if (e.target.classList.contains("filter")) {
    filtersMenu.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const filterValue = e.target.getAttribute("data-filter");
    filtersContent.forEach((col) => {
      if (col.classList.contains(filterValue) || filterValue === ".all") {
        col.classList.add("show");
        col.classList.remove("hide");
      } else {
        col.classList.add("hide");
      }
    });
  }
}
