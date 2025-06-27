AOS.init();

    function toggleDropdown(id) {
      document.querySelectorAll('.mega-dropdown-panel').forEach(panel => {
        if (panel.id !== id) panel.style.display = 'none';
      });
      const panel = document.getElementById(id);
      panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
    }

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.mega-dropdown-panel').forEach(panel => {
          panel.style.display = 'none';
        });
      }
    });