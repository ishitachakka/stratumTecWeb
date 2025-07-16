console.log("Website loaded successfully.");
AOS.init();

// =========================
// LANGUAGE PREFERENCE LOGIC
// =========================

const langToggle = document.getElementById('language-toggle');
const langSelector = document.querySelector('.language-selector');
const langDropdown = document.querySelector('.language-dropdown');
const langLinks = document.querySelectorAll('.language-dropdown a');

// Map of current page (PT) → EN and ES versions
const langMap = {
  '/index.html': { en: '/indexE.html', es: '/indexS.html' },
  '/company.html': { en: '/companyE.html', es: '/companyS.html' },
  '/contact.html': { en: '/contactE.html', es: '/contactS.html' },
  '/products.html': { en: '/productsE.html', es: '/productsS.html' },
  '/solutions.html': { en: '/solutionsE.html', es: '/solutionsS.html' },
  '/expertise.html': { en: '/expertiseE.html', es: '/expertiseS.html' },
  '/content.html': { en: '/contentE.html', es: '/contentS.html' }
};

// Reverse mapping for EN and ES → PT
const reverseLangMap = {};
for (const [pt, others] of Object.entries(langMap)) {
  for (const [lang, path] of Object.entries(others)) {
    reverseLangMap[path] = pt;
  }
}

// =========================
// TOGGLE DROPDOWN LOGIC
// =========================

langToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  langSelector.classList.toggle('show-dropdown');
});

// Prevent clicks inside the dropdown from closing it
langDropdown.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  langSelector.classList.remove('show-dropdown');
});

// =========================
// HANDLE LANGUAGE CHANGE
// =========================

langLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedLang = e.currentTarget.dataset.lang;
    localStorage.setItem('siteLanguage', selectedLang);
    handleLanguageRedirect(selectedLang);
  });
});

function handleLanguageRedirect(lang) {
  const currentPath = window.location.pathname;

  if (lang === 'pt') {
    if (currentPath.endsWith('.html') && !currentPath.includes('E.html') && !currentPath.includes('S.html')) return;
    const redirectTo = reverseLangMap[currentPath];
    if (redirectTo) window.location.href = redirectTo;
  } else {
    const basePath = reverseLangMap[currentPath] || currentPath;
    const redirectTo = langMap[basePath]?.[lang];
    if (redirectTo) window.location.href = redirectTo;
  }
}

// =========================
// AUTO-LOAD PREFERRED LANGUAGE
// =========================

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('siteLanguage');

  if (!savedLang) {
    // First-time visitor: default to 'pt'
    localStorage.setItem('siteLanguage', 'pt');
    return; // Don't redirect on first load
  }

  const currentPath = window.location.pathname;
  const isPT = !currentPath.includes('E.html') && !currentPath.includes('S.html');

  // Only redirect if current page doesn't match saved language
  if ((savedLang === 'en' && isPT) || (savedLang === 'es' && isPT)) {
    handleLanguageRedirect(savedLang);
  }
});
