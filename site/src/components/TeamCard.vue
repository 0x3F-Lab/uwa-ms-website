<template>

    <v-container id="BigDiv">

        <v-card class="team-card">

            <img src="@/images/sample_man.jpg" alt="stock man">

            <v-card-text id="infobox">
                <h2>Name</h2>
                <p>Position</p>
            </v-card-text>

        </v-card>

    </v-container>



</template>

<style scoped>

    img {
        width: 100%;
        height: auto;
        border: 1px solid black;
    }

    h2, p {
        text-align: center;
    }

    .team-card {
        background-color: transparent;
        box-shadow: none
    }

    h2 {
        color: rgb(135, 206, 235);
    }

    p {
        padding-top: 5%;
        color: pink;
    }

</style>

<script setup>
  //
</script>