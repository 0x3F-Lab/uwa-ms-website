<template>
  <div class="our-team" id="our-team">
    <h1 class="title-text">Our Team</h1>

    <v-container class="image-container">
      <TeamCard
        v-for="member in teamMembers"
        :key="member.id"
        :name="member.attributes.Name"
        :position="member.attributes.Role"
        :image="`http://localhost:1338${member.attributes.Photo.data.attributes.url}`"
      />
    </v-container>

    <h1 class="subtitle-text">
      Want to join us? Positions are <span style="color: var(--blue)">open</span>! Apply
      <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
         style="color: var(--orange); text-decoration: underline;">here</a>
    </h1>
  </div>
</template>

<script>
import axios from 'axios';
import TeamCard from '@/components/TeamCard.vue';

export default {
  data() {
    return {
      teamMembers: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:1338/api/committee-members?populate=*');
      this.teamMembers = response.data.data;
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  },
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

/* Main container for the team section */
.our-team {
  padding: 5vh;
  border: 0px solid black;
  width: 100%;
  background-color: var(--off-white);
}

/* Container for team images */
.image-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 2rem;
  justify-content: center;
  width: 90%;
  margin: auto;
}

.team-card {
  width: 300px; 
  height: auto; 
  border-radius: 50%; 
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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .team-card h2, .team-card p {
    font-size: 1.2em !important; /* Increase font size for mobile */
    white-space: normal; /* Allow text to wrap */
    word-wrap: break-word;
  }
}

@media only screen and (max-width: 480px) {
  .image-container {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .team-card h2, .team-card p {
    font-size: 1.2em !important; /* Increase font size for mobile */
    white-space: normal; /* Allow text to wrap */
    word-wrap: break-word;
  }
}
</style>

<script setup>
import TeamCard from '@/components/TeamCard.vue';
</script>
