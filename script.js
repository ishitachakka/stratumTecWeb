console.log("Website loaded successfully.");
AOS.init();

// =========================
// LANGUAGE PREFERENCE LOGIC
// =========================

// Define page mapping
const pageMap = {
  '/indexE.html': '/index.html',
  '/companyE.html': '/company.html',
  '/contactE.html': '/contact.html',
  '/productsE.html': '/products.html',
  '/solutionsE.html': '/solutions.html',
  '/expertiseE.html': '/expertise.html',
  '/insightsTrendsE.html': '/insightsTrends.html'
};

// Reverse mapping for EN -> PT
const reversePageMap = {};
for (const [en, pt] of Object.entries(pageMap)) {
  reversePageMap[pt] = en;
}

window.addEventListener('DOMContentLoaded', () => {
  let lang = localStorage.getItem('siteLanguage');
  const currentPage = window.location.pathname;

  // If language not set, default to 'pt' and set it
  if (!lang) {
    lang = 'pt';
    localStorage.setItem('siteLanguage', 'pt');
  }

  // If on PT page but language is EN, redirect to EN equivalent
  if (lang === 'en' && reversePageMap[currentPage]) {
    window.location.href = reversePageMap[currentPage];
    return;
  }

  // If on EN page but language is PT, redirect to PT equivalent
  if (lang === 'pt' && pageMap[currentPage]) {
    window.location.href = pageMap[currentPage];
    return;
  }

  // Update all links based on language
  document.querySelectorAll('a[data-en]').forEach(link => {
    const target = lang === 'en' ? link.getAttribute('data-en') : link.getAttribute('data-pt');
    if (target) link.setAttribute('href', target);
  });

  // Update logo link
  const logoLink = document.querySelector('.logo-link[data-en]');
  if (logoLink) {
    const target = lang === 'en' ? logoLink.getAttribute('data-en') : logoLink.getAttribute('data-pt');
    if (target) logoLink.setAttribute('href', target);
  }

  // Update translate button text
  const translateBtn = document.getElementById('translate-btn');
  if (translateBtn) {
    translateBtn.textContent = lang === 'en' ? 'português' : 'english';

    translateBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const newLang = lang === 'en' ? 'pt' : 'en';
      localStorage.setItem('siteLanguage', newLang);

      // Redirect accordingly
      if (newLang === 'en' && reversePageMap[currentPage]) {
        window.location.href = reversePageMap[currentPage];
      } else if (newLang === 'pt' && pageMap[currentPage]) {
        window.location.href = pageMap[currentPage];
      } else {
        window.location.reload();
      }
    });
  }
});

console.log(`Current page: ${currentPage}, Language: ${lang}`);
