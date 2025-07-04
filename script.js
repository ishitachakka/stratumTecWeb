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
  const currentPage = window.location.pathname;

  // DEBUG LOGS
  console.log(`Current page: ${currentPage}, Language: ${lang}`);

  // If language not set, default to 'pt' and set it
  if (!lang) {
    lang = 'pt';
    localStorage.setItem('siteLanguage', 'pt');
  }

  // Redirect to match stored language preference
  if (lang === 'en' && pageMap[currentPage]) {
    window.location.href = pageMap[currentPage];
    return;
  }
  if (lang === 'pt' && reversePageMap[currentPage]) {
    window.location.href = reversePageMap[currentPage];
    return;
  }

  // Update translate button text and click functionality
  const translateBtn = document.getElementById('translate-btn');
  if (translateBtn) {
    translateBtn.textContent = lang === 'en' ? 'português' : 'english';

    translateBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const newLang = lang === 'en' ? 'pt' : 'en';
      localStorage.setItem('siteLanguage', newLang);

      // Redirect accordingly
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
