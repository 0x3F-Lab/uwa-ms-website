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
    background-color: #E9E9E9; 
    font-family: Roxborough;
    height: 140px;
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
    margin-left: 51.736%; 
    margin-right: 2.083%;
    width: 50%;
    height: 90%;
    
  }

  .card-title{
    font-size: 2.188em !important;
    color: #E29062;
    margin-top: 10px;
  }

  .card-text {
    font-size: 1.125em !important;
    font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
    margin-top: 20px;
  }

  .card {
    font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
  }

      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        body{
            font-size: 6px;
        }

        .slogan{
          border-bottom: 0.5px solid #888;
        }

        .about{
          border-bottom: 0.5px solid #888;
        }

        .vl {
          border-left: 0.5px solid #888;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        body{
            font-size: 10px;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        body{
            font-size: 12px;
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px){
        body{
            font-size: 14px;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        body{
            font-size: 16px;
        }
    }

</style>

<script setup>
  //
</script>
