<template>
    <v-container id="BigDiv">
        <v-card class="team-card">

            <img class="rounded-xl" src="@/images/sample_man.jpg" alt="stock man">

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
        display: block;
    }

    h2, p {
        text-align: center;
    }

    .team-card {
        background-color: transparent;
        box-shadow: none;
    }

    h2 {
        color: #687db0;
    }

    p {
        padding-top: 5%;
        color: #E59ECD;
    }
</style>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    name: String,
    position: String
});
</script>
