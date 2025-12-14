document.addEventListener('DOMContentLoaded', function() {
  // Cart functionality
  let cartCount = 0;
  const cartBadge = document.querySelector('.cart-badge span');
  const addToBasketButtons = document.querySelectorAll('.add-to-basket');

  // Add to basket functionality
  addToBasketButtons.forEach(button => {
    button.addEventListener('click', function() {
      cartCount++;
      cartBadge.textContent = cartCount;
      
      // Add visual feedback
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'scale(1)';
      }, 150);
    });
  });

  // Newsletter form functionality
  const newsletterForm = document.querySelector('.newsletter-form');
  const formInputs = document.querySelectorAll('.form-input');
  
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation
    let isValid = true;
    formInputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = '#ff4444';
        setTimeout(() => {
          input.style.borderColor = '';
        }, 3000);
      }
    });
    
    if (isValid) {
      // Simulate form submission
      const submitButton = document.querySelector('.form-submit');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      setTimeout(() => {
        submitButton.textContent = 'Sent!';
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          formInputs.forEach(input => input.value = '');
        }, 2000);
      }, 1000);
    }
  });

  // Menu button functionality
  const menuButton = document.querySelector('.menu-btn');
  menuButton.addEventListener('click', function() {
    // Add rotation animation
    this.style.transform = 'rotate(90deg)';
    setTimeout(() => {
      this.style.transform = 'rotate(0deg)';
    }, 200);
  });

  // Smooth scrolling for internal links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Add hover effects for interactive elements
  const interactiveElements = document.querySelectorAll('button, .step-link');
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.2s ease';
    });
  });

  // Parallax effect for hero section (subtle)
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background img');
    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
  });
});
