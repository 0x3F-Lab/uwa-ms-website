<template>
    <div class="info-section">
        <div class="member-section">
            <button class="member-button">Become a Member!</button>
        </div>
        <div class="logo-section">
            <img src="/images/bad_logo.png" alt="UWAMS Logo" class="logo" />
        </div>
    </div>

    <div class="instagram-grid">
      <h2>Stay connected with us:</h2>
      <div class="contact-info">
        <!-- Will put the contact in this span below-->
        <span></span>
        <img src="/images/instagram_logo.svg" >
        <a href="https://www.instagram.com/uwamarketingsociety/" target="_blank">@uwamarketingsociety</a>
      </div>
      <div class="grid-container">
        <div class="grid-item" v-for="post in posts" :key="post.id">
          <img :src="post.image" :alt="post.alt" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InstagramGrid',
    data() {
      return {
        posts: [
          { id: 1, image: 'images/insta_1.jpg', alt: 'What is UWA Marketing Society?' },
          { id: 2, image: 'images/insta_2.jpg', alt: 'Join the UWAMS Committee!' },
          { id: 3, image: 'images/insta_3.jpg', alt: 'UWAMS O-Day 2024' },
          { id: 4, image: 'images/insta_4.jpg', alt: 'Nominations Open!' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
    @font-face {
        font-family: Roxborough;
        src: url('/fonts/RoxboroughCF-Bold.otf');
    }
    
    * {
        font-family: Roxborough;
    }

    .info-section {
    display: flex;
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items horizontally */
    border-top: 1px solid black;
    background-color: var(--off-white);
    padding: 1vw;
}

.member-section {
    margin: 20px 0;
    display: flex;
    justify-content: center; /* Center the button horizontally */
    width: 100%; /* Ensure the button section takes the full width */
}

.member-button {
    background-color: var(--pink);
    color: black;
    border: 1px solid black;
    padding: 30px 40px;
    border-radius: 5px;
    font-size: 3em;
    transform: translateX(-20vw)
}

.logo-section {
    display: flex;
    justify-content: center; /* Center the logo horizontally */
    width: 100%; /* Ensure the logo section takes the full width */
}

.logo {
    width: 300px;
    height: auto;
    transform: translate(30vw, -15vh);
}

/* Remaining styles unchanged */
.instagram-grid {
    text-align: center;
    background-color: var(--off-white);
}

.instagram-grid h2 {
    color: var(--blue);
    text-decoration: underline;
}

.contact-info {
    margin: 10px 0;
}

.contact-info a {
    color: #000;
    text-decoration: none;
}

.contact-info img {
    width: 1.5em;
}

.grid-container {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.grid-item img {
    width: 80%;
    height: auto;
    border: 1px solid rgb(94, 88, 88);
}


  </style>
  