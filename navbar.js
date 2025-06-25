document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggles = document.querySelectorAll(".dropbtn");

  dropdownToggles.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const currentDropdown = this.nextElementSibling;

      // Close any other open dropdowns
      document.querySelectorAll(".mega-dropdown").forEach((dropdown) => {
        if (dropdown !== currentDropdown) {
          dropdown.style.display = "none";
        }
      });

      // Toggle the clicked one
      currentDropdown.style.display =
        currentDropdown.style.display === "flex" ? "none" : "flex";
    });
  });

  // Optional: close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown")) {
      document.querySelectorAll(".mega-dropdown").forEach((dropdown) => {
        dropdown.style.display = "none";
      });
    }
  });
});
