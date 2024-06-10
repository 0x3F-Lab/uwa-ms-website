<template>
    <v-container id="BigDiv">
        <v-card class="team-card">

            <img class="rounded-xl" :src="image" alt="Committe Photo">

            <v-card-text id="infobox">

                <h2>{{ name }}</h2>
                <p>{{ position }}</p>

            </v-card-text>
        </v-card>
    </v-container>
</template>

<style scoped>
    img {
        width: 100%;
        height: auto;
        display: flex;
    }

    h2, p {
        text-align: center;
    }

    .team-card {
        background-color: transparent;
        box-shadow: none;
    }

    h2 {
        color: var(--blue);
    }

    p {
        padding-top: 5%;
        color: var(--pink);
    }
</style>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: String,
    position: String,
    image: {
        type: String,
        required: true
    }
});
</script>
