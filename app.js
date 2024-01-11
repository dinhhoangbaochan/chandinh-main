document.addEventListener("DOMContentLoaded", function() {
  // Smooth Scroll for Navigation Links
  document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          targetSection.scrollIntoView({ behavior: 'smooth' });
      });
  });

  // Dynamic Skills Section
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
      skill.addEventListener('mouseover', function() {
          this.classList.add('hovered');
          // Additional animation or dynamic content can be added here
      });
      skill.addEventListener('mouseout', function() {
          this.classList.remove('hovered');
      });
  });

  // Contact Form Submission Handling
  const contactForm = document.querySelector('#contact form');
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Basic validation or form data processing here
      alert('Thank you for your message!');
  });
});
