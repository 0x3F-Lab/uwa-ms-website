<template>

    <v-container id="OurTeam">


            <h1 id="titleText"> Our Team </h1>


            <v-container id="imagecontainer">

                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />

            </v-container>

            <h1 id="subtitleText">Want to join us? Positions are <span 
                style="color: #687db0">open</span>! Apply 
                <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                style="color: #E29062; text-decoration: underline;" span>here</a></h1>

    </v-container>



</template>

<style scoped>

    @font-face {
        font-family: Roxborough;
        src: url('../../../fonts/RoxboroughCF-Bold.otf');
    }

    * {
        font-family: Roxborough;
    }
   
    #OurTeam {
        border: 0px solid black;
        width: 95%;     
    }
    
    #imagecontainer {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    #titleText {
        color: #E29062;
        text-align: center;
    }

    #subtitleText {
        text-align: center;
        transform: translateY(-40%);
    }
    
</style>

<script setup>
  import TeamCard from '@/components/TeamCard.vue';
</script>