<template>
  <div>
    <div class="slogan">
      {{ slogan }}
    </div>
    <div class="about">
      <div class="header-image" v-if="headerImageUrl">
        <img :src="headerImageUrl" alt="Header Image" />
      </div>
      <div class="card-container">
        <v-card variant="text">
          <v-card-title class="card-title">Who are we?</v-card-title>
          <v-card-text class="card-text">
            {{ about }}
          </v-card-text>
        </v-card>
      </div>
    </div>
    <v-container id="list-container" fluid>
      <EventList />
    </v-container>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      slogan: '',
      about: '',
      headerImageUrl: '',
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:1338/api/about-uwa-ms?populate=*');
      console.log(response);
      this.slogan = response.data.data.attributes.Slogan;
      this.about = response.data.data.attributes.About;
      this.headerImageUrl = 'http://localhost:1338' + response.data.data.attributes.HeaderImage.data.attributes.url;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};
</script>

<style scoped>
@font-face {
  font-family: Roxborough;
  src: url('../../../fonts/RoxboroughCF-Bold.otf');
}

#list-container {
  margin: 0 !important;
  padding: 0 !important;
}

.slogan {
  transition: ease all .05s;
  background-color: #E9E9E9;
  font-family: Roxborough;
  height: 6.89vw;
  border-bottom: 1px solid #888;
  color: #484848;
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  text-indent: 4.167%;
  font-size: 2.063em;
  font-weight: bold;
}

.about {
  transition: ease all .05s;
  background-color: #E9E9E9;
  font-family: Roxborough;
  height: 18vw;
  border-bottom: 1px solid #888;
  color: #484848;
  display: flex; 
  align-items: center;
  flex-direction: row;
}

.header-image {
  flex: 1;
  border-right: 1px solid #888;
  height: 100%;
  max-height: 18vw; /* Ensure image isn't too tall */
}

.header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure image covers the container without stretching */
}

.card-container {
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 1vw;
  margin-top: 0.5vw;
  height: auto;
}

.card-title {
  transition: ease all .05s;
  font-size: 2.2em !important;
  color: #E29062;
}

.card-text {
  transition: ease all .05s;
  font-size: 1.25em !important;
  font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
  line-height: 2em !important;
  margin-top: 1.5vw;
}

.card {
  font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
}

/* Responsive styles */
@media only screen and (max-width: 1280px) {
  .card-title {
    font-size: 1.8em !important;
  }

  .card-text {
    font-size: 0.9em !important;
  }

  .card-container {
    height: auto;
  }
}

@media only screen and (max-width: 768px) {
  .slogan {
    font-size: 1em;
    height: auto;
    padding: 10px;
  }

  .about {
    height: auto;
    flex-direction: column; 
    text-align: center;
  }

  .header-image {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #888; /* Add bottom border for mobile view */
  }

  .header-image img {
    max-height: 50vh; /* Ensure image doesn't take too much vertical space on mobile */
  }

  .card-container {
    margin: 0;
    width: 100%;
    height: auto;
    padding: 10px;
  }

  .card-title {
    font-size: 1.5em !important; 
  }

  .card-text {
    font-size: 1em !important; 
  }

  .card {
    font-size: 1em; 
  }
}
</style>

<script setup>
import EventList from "@/components/EventList.vue";
</script>
