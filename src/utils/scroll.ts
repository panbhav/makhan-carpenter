/**
 * Smoothly scrolls to a given section by element ID without polluting the browser URL with #hash fragments.
 * Keeps single-page app URL clean (e.g. https://panbhav.github.io/makhan-carpenter/).
 */
export const scrollToSection = (sectionId: string) => {
  if (!sectionId || sectionId === 'home' || sectionId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const cleanId = sectionId.replace(/^#/, '');
    const element = document.getElementById(cleanId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  // Remove #hash from the address bar if present
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
};
