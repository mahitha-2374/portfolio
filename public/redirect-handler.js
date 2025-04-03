// Handle redirects for SPA in GitHub Pages
(function() {
  const redirect = sessionStorage.getItem('redirect');
  if (redirect && redirect !== window.location.pathname) {
    sessionStorage.removeItem('redirect');
    // Remove the base path from the redirect
    const path = redirect.replace(/^\/adi-portfolio/, '');
    if (path) {
      // Only redirect if there's an actual path
      window.history.replaceState(null, null, path);
    }
  }
})();
