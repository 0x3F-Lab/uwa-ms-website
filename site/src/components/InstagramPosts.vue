<template>
    <div class="post-container" id="post-container">
      <h1 class="title-text">Find Us On Instagram!</h1>
  
      <v-container class="image-container">
        <div
          v-for="post in instagramPosts"
          :key="post.id"
          class="instagram-post"
          v-html="post.attributes.EmbedCode"
        ></div>
      </v-container>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        instagramPosts: []
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:1338/api/instagram-posts?populate=*');
        this.instagramPosts = response.data.data;
  
        // Dynamically load the Instagram embed script after data is fetched
        if (this.instagramPosts.length > 0) {
          const script = document.createElement('script');
          script.async = true;
          script.defer = true;
          script.src = '//www.instagram.com/embed.js';
          document.body.appendChild(script);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };
  </script>
  
<style>
@font-face {
  font-family: Roxborough;
  src: url('/fonts/RoxboroughCF-Bold.otf');
}

* {
  font-family: Roxborough;
}

/* Main container for the team section */
.post-container {
    
  padding-top: 5vh;
  padding-bottom: 5vh;
  width: 100%;
  background-color: var(--off-white);
  overflow-x: hidden; /* Prevent horizontal overflow */
  border: 1px solid #888;
}

/* Container for Instagram posts */
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center items horizontally */
  gap: 2rem;
  width: 80%;
  margin: auto;
}

.instagram-post {
  flex: 1 1 calc(33.333% - 2rem); /* Make posts responsive */
  box-sizing: border-box; /* Ensure padding and border are included in the element's total width and height */
}

.instagram-post blockquote {
  margin: 0 auto !important; /* Ensure the blockquote centers correctly */
}

.instagram-post .instagram-media {
  max-width: 100% !important; /* Ensure media does not exceed its container */
  width: 100% !important; /* Ensure width does not exceed container */
}

/* Title text styling */
.title-text {
  color: var(--orange);
  text-align: center;
  font-size: 2.4em;
}

/* Responsive styles */
@media only screen and (max-width: 1280px) {
  .title-text {
    font-size: 2em !important;
  }
}

@media only screen and (max-width: 768px) {
  .title-text {
    font-size: 1.5em !important;
  }

  .instagram-post {
    flex: 1 1 calc(50% - 2rem);
  }
}

@media only screen and (max-width: 480px) {
  .title-text {
    font-size: 1.2em !important;
  }

  .instagram-post {
    flex: 1 1 100%;
  }
}

</style>