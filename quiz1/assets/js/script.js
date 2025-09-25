document.addEventListener('DOMContentLoaded', function() {
  
  const themeToggleBtn = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  const htmlEl = document.documentElement;

  htmlEl.setAttribute('data-bs-theme', currentTheme);
  
  if (themeToggleBtn) {
    if (currentTheme === 'dark') {
      themeToggleBtn.querySelector('i').className = 'bi bi-sun-fill';
    } else {
      themeToggleBtn.querySelector('i').className = 'bi bi-moon-stars-fill';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', function() {
      
      let newTheme;
      if (htmlEl.getAttribute('data-bs-theme') === 'dark') {
        newTheme = 'light';
      } else {
        newTheme = 'dark';
      }
      
      htmlEl.setAttribute('data-bs-theme', newTheme);
      
      if (newTheme === 'dark') {
        this.querySelector('i').className = 'bi bi-sun-fill';
      } else {
        this.querySelector('i').className = 'bi bi-moon-stars-fill';
      }
      
      localStorage.setItem('theme', newTheme);
    });
  }

});