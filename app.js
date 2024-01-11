// Enhancements for script.js

// Responsive Hamburger Menu
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.classList.toggle('active');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Light/Dark Mode Toggle
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
  } else {
      document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);
