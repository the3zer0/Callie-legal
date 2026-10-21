(() => {
  const buttons = [...document.querySelectorAll('[data-lang-switch]')];
  const links = document.querySelector('[data-mobile-links]');
  const mobile = document.querySelector('[data-mobile-toggle]');
  let activeLang = 'en';
  function setLang(lang) {
    activeLang = lang === 'bn' ? 'bn' : 'en';
    document.querySelectorAll('[data-lang-content]').forEach(el => {
      el.hidden = el.getAttribute('data-lang-content') !== activeLang;
    });
    document.documentElement.lang = activeLang;
    buttons.forEach(button => {
      button.textContent = activeLang === 'en' ? 'বাংলা ↗' : 'English ↗';
      button.setAttribute('aria-label', activeLang === 'en' ? 'Read this site in Bangla' : 'Read this site in English');
    });
  }
  buttons.forEach(b => b.addEventListener('click', () => setLang(activeLang === 'en' ? 'bn' : 'en')));
  if (mobile && links) {
    mobile.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      mobile.setAttribute('aria-expanded', String(open));
    });
    links.addEventListener('click', e => {
      if (e.target.closest('a')) { links.classList.remove('open'); mobile.setAttribute('aria-expanded', 'false'); }
    });
  }
  setLang('en');
})();
