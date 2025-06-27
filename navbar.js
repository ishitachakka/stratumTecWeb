AOS.init();

// Function to toggle dropdown on click
function toggleDropdown(id) {
  document.querySelectorAll('.mega-dropdown-panel').forEach(panel => {
    if (panel.id !== id) panel.style.display = 'none';
  });

  const panel = document.getElementById(id);
  const isOpen = panel.style.display === 'block';
  panel.style.display = isOpen ? 'none' : 'block';
}

// Attach event listeners to each dropbtn
document.querySelectorAll('.dropbtn').forEach(button => {
  const dropdown = button.parentElement;
  const panelId = dropdown.querySelector('.mega-dropdown-panel').id;

  button.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent event bubbling
    toggleDropdown(panelId);
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.mega-dropdown-panel').forEach(panel => {
      panel.style.display = 'none';
    });
  }
});
