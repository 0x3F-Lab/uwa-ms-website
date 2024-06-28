<template>
    <div class="our-team"  id="our-team">
      <h1 class="title-text">Our Team</h1>
  
      <v-container class="image-container">
        <TeamCard name="Name 1" position="Position" image="/images/sample_1.jpg"/>
        <TeamCard name="Name 2" position="Position" image="/images/sample_2.jpg"/>
        <TeamCard name="Name 3" position="Position" image="/images/sample_3.jpg"/>
        <TeamCard name="Name 4" position="Position" image="/images/sample_4.jpg"/>
        <TeamCard name="Name 5" position="Position" image="/images/sample_5.jpg"/>
      </v-container>
  
      <h1 class="subtitle-text">
        Want to join us? Positions are <span style="color: var(--blue)">open</span>! Apply 
        <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
           style="color: var(--orange); text-decoration: underline;">here</a>
      </h1>
    </div>
  </template>
  
  <style scoped>
  @font-face {
    font-family: Roxborough;
    src: url('/fonts/RoxboroughCF-Bold.otf');
  }
  
  * {
    font-family: Roxborough;
  }
  
  /* Main container for the team section */
  .our-team {
    padding: 4vh;
    border: 0px solid black;
    width: 100%;
    background-color: var(--off-white);
    
  }
  
  /* Container for team images */
  .image-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    width: 85%;
    margin: auto;
  }
  
  /* Title text styling */
  .title-text {
    color: var(--orange);
    text-align: center;
    font-size: 2.4em;
  }
  
  /* Subtitle text styling */
  .subtitle-text {
    text-align: center;
    transform: translateY(-40%);
    font-size: 1.3em;
  }
  
  /* Responsive styles */
  @media only screen and (max-width: 1280px) {
    .title-text {
      font-size: 2em !important;
    }
  
    .subtitle-text, a {
      font-size: 1.1em !important;
    }
  }
  
  @media only screen and (max-width: 900px) {
    .image-container {
      grid-template-columns: repeat(3, 2fr);
    }
    .image-container > :nth-child(n+4):nth-child(-n+6) {
      justify-self: center;
      display: flex;
      align-items: center;
      transform: translateX(55%);
    }
  }
  
  @media only screen and (max-width: 768px) {
    .title-text {
      font-size: 1.5em !important;
    }
  
    .subtitle-text, a {
      font-size: 1em !important;
    }
  
    .image-container {
      grid-template-columns: repeat(3, 2fr);
      gap: 0.5rem;
    }
  }
  
  @media only screen and (max-width: 480px) {
    .image-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }
    .image-container > :nth-child(n+4):nth-child(-n+6) {
      transform: none;
    }
  
    .image-container > :nth-child(5) {
      transform: translateX(55%) !important;
    }
  }
  </style>
  
  <script setup>
  import TeamCard from '@/components/TeamCard.vue';
  </script>
  