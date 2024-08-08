<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="social-icons">
          <a href="https://www.instagram.com" target="_blank" class="social-icon">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="mailto:your-email@example.com" class="social-icon">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" class="social-icon">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2024 UWA Marketing Society | Designed by <code>0x3F Labs</code>
      </div>
    </footer>
  </template>
  
  <style scoped>
  @font-face {
    font-family: Roxborough;
    src: url('/fonts/RoxboroughCF-Bold.otf');
  }
  
  * {
    font-family: Roxborough;
  }
  
  .footer {
    background-color: var(--off-white);
    color: #484848;
    padding: 2rem 0;
    text-align: center;
    border-top: 1px solid #888;
  }
  
  .footer-content {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .social-icons {
    display: flex;
    gap: 1rem;
  }
  
  .social-icon {
    font-size: 1.5em;
    color: var(--blue);
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .social-icon:hover {
    color: var(--orange);
  }
  
  .footer-bottom {
    font-size: 1em;
    color: #888;
  }
  
  /* Responsive styles */
  @media only screen and (max-width: 768px) {
    .footer {
      padding: 1rem 0;
    }
  
    .social-icon {
      font-size: 1.2em;
    }
  }
  </style>
  