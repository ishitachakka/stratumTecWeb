document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector(".dropbtn");
    const menu = dropdown.querySelector(".mega-dropdown");

    button.addEventListener("click", (e) => {
      e.stopPropagation();

      // Toggle only this one
      const isOpen = menu.style.display === "flex";
      closeAllDropdowns();
      menu.style.display = isOpen ? "none" : "flex";
    });
  });

  // Close all on outside click
  document.addEventListener("click", closeAllDropdowns);

  function closeAllDropdowns() {
    document.querySelectorAll(".mega-dropdown").forEach((d) => {
      d.style.display = "none";
    });
  }
});
