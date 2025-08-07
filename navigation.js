function loadFooterCSS() {
  if (!document.getElementById('footer-styles')) {
    const link = document.createElement('link');
    link.id = 'footer-styles';
    link.rel = 'stylesheet';
    link.href = 'footer.css'; // Adjust the path as necessary
    document.head.appendChild(link);
  }
}

function loadFooter() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      const footerPlaceholder = document.getElementById('footer-placeholder');
      if (footerPlaceholder) {
        footerPlaceholder.innerHTML = data;
        loadFooterCSS();
        const footer = footerPlaceholder.querySelector('footer');
        if (footer) {
          footer.classList.remove('visible'); // Ensure not visible on load
        }
      }
    });
}

window.addEventListener('DOMContentLoaded', function() { 
  loadFooter();
});

window.addEventListener('scroll', function() {
  const footer = document.querySelector('footer');
  if (!footer) return;
  const scrolledToBottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
  if (scrolledToBottom) {
    footer.classList.add('visible');
  } else {
    footer.classList.remove('visible');
  }
});