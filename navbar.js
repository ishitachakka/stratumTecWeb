AOS.init();

    function toggleDropdown(id, button) {
      document.querySelectorAll('.mega-dropdown-panel').forEach(panel => {
        if (panel.id !== id) panel.style.display = 'none';
      });
      const panel = document.getElementById(id);
      const isOpen = panel.style.display === 'block';
      document.querySelectorAll('.dropbtn .arrow').forEach(arrow => arrow.classList.remove('open'));
      if (!isOpen) {
        panel.style.display = 'block';
        button.querySelector('.arrow').classList.add('open');
      } else {
        panel.style.display = 'none';
        button.querySelector('.arrow').classList.remove('open');
      }
    }

    document.addEventListener('click', (e) => {
      const dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(drop => {
        if (!drop.contains(e.target)) {
          drop.querySelector('.mega-dropdown-panel').style.display = 'none';
          drop.querySelector('.arrow').classList.remove('open');
        }
      });
    });