<template>
    <v-container class="big-div">
      <v-card class="team-card">
        <img class="rounded-xl" :src="image" alt="Committe Photo">
        <v-card-text class="info-box">
          <h2>{{ name }}</h2>
          <p>{{ position }}</p>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <style scoped>
  /* Ensure images are responsive */
  img {
    width: 100%;
    height: auto;
    display: flex;
  }
  
  /* Center-align text within the card */
  h2, p {
    text-align: center;
  }
  
  /* Styling for the team card */
  .team-card {
    background-color: transparent;
    box-shadow: none;
  }
  
  /* Styling for the name */
  h2 {
    color: var(--blue);
    font-size: 1.5em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  /* Styling for the position */
  p {
    padding-top: 5%;
    color: var(--pink);
    font-size: 1em;
  }
  
  /* Responsive styles */
  @media only screen and (max-width: 1280px) {
    h2 {
      font-size: 1.2em !important;
    }
  
    p {
      font-size: 0.8em !important;
    }
  }
  
  @media only screen and (max-width: 768px) {
    h2 {
      font-size: 1.1em !important;
    }
  
    p {
      font-size: 0.8em !important;
    }
  }
  </style>
  
  <script setup>
  import { defineProps } from 'vue';
  
  /* Define props for the component */
  const props = defineProps({
    name: String,
    position: String,
    image: {
      type: String,
      required: true
    }
  });
  </script>
  