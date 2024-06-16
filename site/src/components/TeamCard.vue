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
        font-size: 1.5em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        padding-top: 5%;
        color: var(--pink);
        font-size: 1em;
    }

    /* Responsive styles */
    @media only screen and (max-width: 1280px) {
        h2 {
            font-size: 1.2em !important;
        }

        p {
            font-size: 0.8em !important;
        }
    }

    @media only screen and (max-width: 768px) {
        h2 {
            font-size: 1.1em !important;
        }

        p, a {
            font-size: 0.8em !important;
        }
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
