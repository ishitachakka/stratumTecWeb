function toggleMegaMenu(menuId) {
  const menus = document.querySelectorAll('.mega-menu-panel');
  menus.forEach(menu => {
    if (menu.id === menuId) {
      menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    } else {
      menu.style.display = 'none';
    }
  });
}

// Close mega menu when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.navbar') && !e.target.closest('.mega-menu-panel')) {
    document.querySelectorAll('.mega-menu-panel').forEach(menu => menu.style.display = 'none');
  }
});
