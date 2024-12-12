document.querySelectorAll(".dropdown > a").forEach((menuLink) => {
  menuLink.addEventListener("click", (event) => {
    event.preventDefault();
    const dropdown = menuLink.nextElementSibling;

    // Skift mellem at vise og skjule dropdown
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });
});
