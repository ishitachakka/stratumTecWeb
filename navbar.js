document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");
    const panels = document.querySelectorAll(".mega-dropdown-panel");

    dropdowns.forEach((dropdown) => {
      const type = dropdown.getAttribute("data-dropdown");
      const panel = document.getElementById(`mega-${type}`);

      dropdown.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent global click from closing immediately
        panels.forEach((p) => {
          if (p !== panel) p.style.display = "none";
        });
        panel.style.display = panel.style.display === "block" ? "none" : "block";
      });
    });

    window.addEventListener("click", () => {
      panels.forEach((p) => (p.style.display = "none"));
    });
  });