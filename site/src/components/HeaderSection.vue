<template>
  <div class="slogan">
    {{ slogan }}
  </div>
  <div class="about">
    <div class="vl"></div>
    <div class="card-container">
      <v-card variant="text">
        <v-card-title class="card-title">Who are we?</v-card-title>
        <v-card-text class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat nisl sit amet quam ultricies, sit amet malesuada justo convallis.
        </v-card-text>
      </v-card>
    </div>
  </div>
  <v-container id="list-container" fluid>
    <EventList />
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      slogan: '',
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:1338/api/slogan-test');
      this.slogan = response.data.data.attributes.slogan;
    } catch (error) {
      console.error('Error fetching slogan:', error);
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

.vl {
  transition: ease all .05s;
  border-left: 1px solid #888;
  height: 18vw;
  position: absolute;
  left: 50%;
  top: auto;
}

.card-container {
  margin-left: 51.35vw;
  margin-right: 2.083vw;
  margin-bottom: 1vw;
  margin-top: 0.5vw;
  width: 50vw;
  height: 13.1vw;
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

  .vl {
    display: none;
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
