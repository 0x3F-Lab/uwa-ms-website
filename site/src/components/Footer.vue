<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-bottom">
          &copy; 2024 UWA Marketing Society | Designed by <code>0x3F Labs</code>
        </div>
        <div class="social-icons">
          <a href="https://www.instagram.com" target="_blank" class="social-icon">
            <v-icon :icon="mdiInstagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" class="social-icon">
            <v-icon :icon="mdiFacebook" />
          </a>
          <a href="mailto:your-email@example.com" class="social-icon">
            <v-icon :icon="mdiEmailOutline" />
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        
      </div>
    </footer>
  </template>

  <script setup>
    import { mdiInstagram } from '@mdi/js'
    import { mdiFacebook } from '@mdi/js'
    import { mdiEmailOutline } from '@mdi/js'
  </script>

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
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
  }
  
  .footer-bottom {
    margin: 0.5rem;
    padding-left: 2rem;
  }
  
  .social-text {
    text-align: center;
    margin: 0.5rem;
    padding-right: 1rem;
    padding-left: 2rem;
    color: var(--blue);
  }

  .social-icons {
    display: flex;
    gap: 2rem;
    padding-right: 2.5rem;
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
  
  
  /* Responsive styles */
  @media only screen and (max-width: 768px) {
    .footer {
      padding: 1rem 0;
    }

    .footer-content {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      margin: 0.5rem
    }
  
    .social-icon {
      font-size: 1.2em;
      padding-bottom: 0.8rem;
    }

    .social-icons {
      padding-right: 0rem;
    }

    .footer-bottom {
      padding-left: 0rem;
    }
  }
  @media only screen and (max-width: 500px) {
    .footer{
      padding: 0.5rem;
    }
    .footer-content{
      margin: 0.2rem;
    }
    .social-icon {
      font-size: 1em;
      padding-bottom: 0.5rem;
      padding-top: 0.4rem;
    }

    .social-icons{
      gap: 1.5rem;
    }

    .footer-bottom {
      font-size: 0.7em;
    }
  }
  </style>
  