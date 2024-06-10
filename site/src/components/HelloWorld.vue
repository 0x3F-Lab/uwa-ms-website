// This contains the slogan and 'Who are we' segments

<template>
  <div class="slogan">
        Elevating minds and empowering future.
  </div>
  <div class="about">
    <div class="vl"></div>
    <div class="card-container">
    <v-card
      variant="text">
      <v-card-title class="card-title">Who are we?</v-card-title>
      <v-card-text class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat nisl sit amet quam ultricies, sit amet malesuada justo convallis.
      </v-card-text>
    </v-card>
    </div>
  </div>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="n in 4"
        :key="n"
        cols="12"
      >
        <v-card
          class="card"
          color="orange"
          :subtitle="`Subtitle for Content ${n}`"
          :title="`Example Content ${n}`"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
  @font-face {
    font-family: Roxborough;
    src: url('../../../fonts/RoxboroughCF-Bold.otf');
  }
  .slogan{
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

  .about{
    transition: ease all .05s;
    background-color: #E9E9E9; 
    font-family: Roxborough;
    height: 16vw;
    border-bottom: 1px solid #888;
    color: #484848;
    display: flex; /* Use flexbox */
    align-items: center;
  }

  .vl {
    transition: ease all .05s;
    border-left: 1px solid #888;
    height: 16vw;
    position: absolute;
    left: 50%;
    top: auto;
  }

  .card-container {
    margin-left: 51.35vw; 
    margin-right: 2.083vw;
    width: 50vw;
    height: 13.1vw;
  }

  .card-title{
    transition: ease all .05s;
    font-size: 2.4em !important;
    color: #E29062;
    margin-top: 0.5vw;
  }

  .card-text {
    transition: ease all .05s;
    font-size: 1.3em !important;
    font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
    line-height: 2em !important;
    margin-top: 1.1vw;
  }

  .card {
    font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
  }

  @media only screen and (max-width: 400px) {
    body{
      font-size: 5px;
    }

    .slogan{
      font-size: 1.8em;
      height: 9vw;
      border-bottom: 0.5px solid #888;
    }

    .about{
      height: 27vw;
      border-bottom: 0.5px solid #888;
    }

    .vl {
      height: 27vw;
      top: auto;
      border-left: 0.5px solid #888;
    }

    .card-container {
      height: 30vw;
    }

    .card-title{
      font-size: 2em !important;
    }

    .card-text {
      font-size: 1.2em !important;
      margin-top: -3vw;
    }
}

  @media only screen and (min-width: 400px) and (max-width: 500px) {
    body{
      font-size: 6px;
    }

    .slogan{
      font-size: 1.9em;
      height: 9vw;
      border-bottom: 0.5px solid #888;
    }

    .about{
      height: 27vw;
      border-bottom: 0.5px solid #888;
    }

    .vl {
      height: 27vw;
      top: auto;
      border-left: 0.5px solid #888;
    }

    .card-container {
      height: 29vw;
    }

    .card-title{
      font-size: 2.1em !important;
    }

    .card-text {
      font-size: 1.2em !important;
      margin-top: -2vw;
    }
}

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (min-width: 500px) and (max-width: 600px) {
    body{
      font-size: 6px;
    }

    .slogan{
      font-size: 2.1em;
      height: 9vw;
      border-bottom: 0.5px solid #888;
    }

    .about{
      height: 25vw;
      border-bottom: 0.5px solid #888;
    }

    .vl {
      height: 25vw;
      top: auto;
      border-left: 0.5px solid #888;
    }

    .card-container {
      height: 26vw;
    }

    .card-title{
      font-size: 2.6em !important;
    }

    .card-text {
      font-size: 1.6em !important;
      margin-top: -1vw;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) and (max-width: 768px){
    body{
      font-size: 9px;
    }
    .slogan{
      font-size: 2.1em;
      height: 9vw;
    }
    .about{
      height: 24vw;
    }

    .vl {
      height: 24vw;
      top: auto;
    }

    .card-container {
      height: 24vw;
    }

    .card-title{
      font-size: 2.4em !important;
    }

    .card-text {
      font-size: 1.3em !important;
      margin-top: 0vw;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) and (max-width: 992px){
    body{
      font-size: 11px;
    }
    .slogan{
      font-size: 2em;
      height: 8vw;
    }
    .about{
      height: 22vw;
    }

    .vl {
      height: 22vw;
      top: auto;
    }

    .card-container {
      height: 20vw;
    }

    .card-title{
      font-size: 2.4em !important;
    }

    .card-text {
      font-size: 1.3em !important;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) and (max-width: 1200px){
    body{
      font-size: 13px;
    }
    .slogan{
      font-size: 2em;
      height: 7.9vw;
    }
    .about{
      height: 20vw;
    }

    .vl {
      height: 20vw;
      top: auto;
    }

    .card-container {
      height: 17vw;
    }

    .card-title{
      font-size: 2.4em !important;
    }

    .card-text {
      font-size: 1.3em !important;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) and (max-width: 1450px){
    body{
      font-size: 16px;
    }
    .slogan{
      font-size: 1.8em;
      height: 7.6vw;
    }
    .about{
      height: 18vw;
    }

    .vl {
      height: 18vw;
      top: auto;
    }

    .card-container {
      height: 15vw;
    }

    .card-title{
      font-size: 2.2em !important;
    }

    .card-text {
      font-size: 1.15em !important;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1450px){
    body{
      font-size: 16px;
    }
  }

</style>

<script setup>
  //
</script>
