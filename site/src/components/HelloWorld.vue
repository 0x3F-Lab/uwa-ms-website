// This is an example of a component

<template>
  <div class="slogan">
        Elevating minds and empowering future.
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
  .card {
    font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
  }

</style>

<script setup>
  //
</script>
