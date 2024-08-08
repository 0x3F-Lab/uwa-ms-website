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
  padding-top: 75%; 
  overflow: hidden;
  border-radius: 12px;
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
  white-space: normal; 
}

/* Styling for the team card */
.team-card {
  background-color: transparent;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 100%;
  max-width: 300px;
}

/* Ensure the info box is properly displayed */
.info-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}

/* Styling for the name */
h2 {
  color: var(--blue);
  font-size: 1.5em;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* Styling for the position */
p {
  padding-top: 5%;
  color: var(--pink);
  font-size: 1em;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* Responsive styles */
@media only screen and (max-width: 1280px) {
  .team-card {
    max-width: 250px;
  }

  h2 {
    font-size: 1.4em !important;
  }

  p {
    font-size: 1em !important;
  }
}

@media only screen and (max-width: 768px) {
  .team-card {
    max-width: 100%;
  }

  h2, p {
    font-size: 1.2em !important;
    white-space: normal;
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
