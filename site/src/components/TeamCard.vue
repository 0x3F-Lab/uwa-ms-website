<template>
  <v-container class="big-div">
    <v-card class="team-card">
      <div class="image-wrapper">
        <img class="rounded-xl" :src="image" alt="Committe Photo">
      </div>
      <v-card-text class="info-box">
        <h2>{{ name }}</h2>
        <p>{{ position }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
/* Main container for the team section */
.big-div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Wrapper to maintain aspect ratio */
.image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 75%; /* 4:3 Aspect Ratio (change this to 56.25% for 16:9) */
  overflow: hidden;
  border-radius: 12px; /* To match the image's rounded-xl class */
}

/* Ensure images are responsive and cover the entire wrapper */
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Center-align text within the card */
h2, p {
  text-align: center;
}

/* Styling for the team card */
.team-card {
  background-color: transparent;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  width: 100%;
  max-width: 200px; /* Adjust as necessary */
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
  .team-card {
    max-height: 180px;
    max-width: 180px; /* Adjust as necessary */
  }

  h2 {
    font-size: 1.2em !important;
  }

  p {
    font-size: 0.8em !important;
  }
}

@media only screen and (max-width: 768px) {
  .team-card {
    max-height: 150px;
    max-width: 150px; /* Adjust as necessary */
  }

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
