document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");
  const panels = document.querySelectorAll(".mega-dropdown-panel");

  dropdowns.forEach((dropdown) => {
    const type = dropdown.getAttribute("data-dropdown");
    const panel = document.getElementById(`mega-${type}`);
    const arrow = dropdown.querySelector(".arrow");

    dropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = panel.style.display === "block";

      // Close all panels
      panels.forEach((p) => p.style.display = "none");
      dropdowns.forEach(d => d.classList.remove("open"));

      // Toggle clicked panel
      if (!isOpen) {
        panel.style.display = "block";
        dropdown.classList.add("open");
      }
    });
  });

  // Close on outside click
  window.addEventListener("click", () => {
    panels.forEach(p => p.style.display = "none");
    dropdowns.forEach(d => d.classList.remove("open"));
  });
});
