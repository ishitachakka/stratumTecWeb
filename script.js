console.log("Website loaded successfully.");
AOS.init();

// =========================
// LANGUAGE PREFERENCE LOGIC
// =========================

// Define page mapping (PT ➔ EN)
const pageMap = {
  '/index.html': '/indexE.html',
  '/company.html': '/companyE.html',
  '/contact.html': '/contactE.html',
  '/products.html': '/productsE.html',
  '/solutions.html': '/solutionsE.html',
  '/expertise.html': '/expertiseE.html',
  '/insightsTrends.html': '/insightsTrendsE.html'
};

// Reverse mapping (EN ➔ PT)
const reversePageMap = {};
for (const [pt, en] of Object.entries(pageMap)) {
  reversePageMap[en] = pt;
}

window.addEventListener('DOMContentLoaded', () => {
  let lang = localStorage.getItem('siteLanguage');
  let currentPage = window.location.pathname;

  // Adjust for GitHub Pages repo prefix
  if (currentPage.startsWith('/stratumTecWeb')) {
    currentPage = currentPage.replace('/stratumTecWeb', '');
  }

  console.log(`Adjusted currentPage: ${currentPage}, Language: ${lang}`);

  if (!lang) {
    lang = 'pt';
    localStorage.setItem('siteLanguage', 'pt');
  }

  if (lang === 'en' && pageMap[currentPage]) {
    window.location.href = pageMap[currentPage];
    return;
  }
  if (lang === 'pt' && reversePageMap[currentPage]) {
    window.location.href = reversePageMap[currentPage];
    return;
  }

  const translateBtn = document.getElementById('translate-btn');
  if (translateBtn) {
    translateBtn.textContent = lang === 'en' ? 'português' : 'english';

    translateBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const newLang = lang === 'en' ? 'pt' : 'en';
      localStorage.setItem('siteLanguage', newLang);

      if (newLang === 'en' && pageMap[currentPage]) {
        window.location.href = pageMap[currentPage];
      } else if (newLang === 'pt' && reversePageMap[currentPage]) {
        window.location.href = reversePageMap[currentPage];
      } else {
        window.location.reload();
      }
    });
  }
});
