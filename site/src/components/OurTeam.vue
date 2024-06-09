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
                style="color: rgb(135, 206, 235)">open</span>! Apply 
                <span style="color: orange; text-decoration: underline;" span>
                    here</span></h1>

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
        color: orange;
        text-align: center;
    }

    #subtitleText {
        text-align: center;
    }
    
</style>

<script setup>
  import TeamCard from '@/components/TeamCard.vue';
</script>