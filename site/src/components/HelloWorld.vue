// This is an example of a component

<template>
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
.card {
  font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
}

</style>

<script setup>
  //
</script>
