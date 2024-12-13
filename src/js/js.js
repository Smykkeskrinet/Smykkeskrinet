const sortButton = document.getElementById("sort-toggle");
const sortMenu = document.getElementById("sort-menu");

sortButton.addEventListener("click", () => {
  // Toggle menuens synlighed
  sortMenu.classList.toggle("active");
});

// Luk dropdown-menuen, hvis man klikker udenfor
document.addEventListener("click", (event) => {
  if (!sortButton.contains(event.target) && !sortMenu.contains(event.target)) {
    sortMenu.classList.remove("active");
  }
});
