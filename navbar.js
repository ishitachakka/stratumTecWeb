// navbar.js

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector(".dropbtn");
    const panel = dropdown.querySelector(".mega-dropdown-panel");

    button.addEventListener("click", () => {
      const isOpen = dropdown.classList.contains("open");

      // Close all dropdowns first
      dropdowns.forEach(d => {
        d.classList.remove("open");
        d.querySelector(".mega-dropdown-panel").style.display = "none";
      });

      // Toggle current dropdown
      if (!isOpen) {
        dropdown.classList.add("open");
        panel.style.display = "block";
      }
    });
  });

  // Close dropdown if click happens outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach(d => {
        d.classList.remove("open");
        d.querySelector(".mega-dropdown-panel").style.display = "none";
      });
    }
  });
});
