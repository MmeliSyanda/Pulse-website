document.addEventListener('DOMContentLoaded', function () {
  // Shrink header on scroll
  window.onscroll = function () {
    const header = document.querySelector('.header');
    // Ensure header exists before trying to modify it
    if (header) {
      if (window.scrollY > 10) {
        header.classList.add('small');
      } else {
        header.classList.remove('small');
      }
    }
  };

  // Responsive navigation (hamburger menu)
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('.nav');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
    });
  }
});