// This is an example of a component

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
    background-color: #E9E9E9; 
    font-family: Roxborough;
    height: 140px;
    border-bottom: 1px solid #888;
    color: #484848;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    text-indent: 60px;
    font-size: 33px;
    font-weight: bold;
  }

  .about{
    background-color: #E9E9E9; 
    font-family: Roxborough;
    height: 300px;
    border-bottom: 1px solid #888;
    color: #484848;
    display: flex; /* Use flexbox */
    align-items: center;
  }

  .vl {
    border-left: 1px solid #888;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 300;
  }

  .card-container {
    margin-left: 745px; 
    margin-right: 30px;
    width: 50%;
    height: 90%;
    
  }

  .card-title{
    font-size: 35px !important;
    color: #E29062;
    margin-top: 10px;
  }

  .card-text {
    font-size: 18px !important;
    font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
    margin-top: 20px;
  }

  .card {
    font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
  }

</style>

<script setup>
  //
</script>
