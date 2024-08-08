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
  height: auto;
  padding: 1em 0;
  border-bottom: 1px solid #888;
  color: #484848;
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  font-size: 2.063em;
  font-weight: bold;
}

.about {
  transition: ease all .05s;
  background-color: #E9E9E9;
  font-family: Roxborough;
  display: flex;
  align-items: center; 
  flex-direction: row;
  border-bottom: 1px solid #888;
}

.header-image {
  flex: 1;
  border-right: 1px solid #888;
  overflow: hidden; 
  margin: 0;
  padding: 0; 
  display: flex; 
  align-items: center; 
}

.header-image img {
  width: 100%;
  height: auto; 
  object-fit: cover; 
  display: block; 
  margin: 0;
  padding: 0;
  max-height: 100%; 
}

.card-container {
  flex: 1;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 1vw;
  margin-top: 0.5vw;
  height: auto; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
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
  white-space: pre-wrap; /* Preserve whitespace and wrap text */
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
    font-size: 1em !important;
  }

  .card-container {
    height: auto; 
  }
}

@media only screen and (max-width: 768px) {
  .slogan {
    font-size: 1.5em;
    padding: 0.5em 0;
  }

  .about {
    height: auto;
    flex-direction: column; 
    text-align: center;
  }

  .header-image {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #888; 
  }

  .header-image img {
    max-height: 50vh;
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
