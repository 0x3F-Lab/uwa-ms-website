<template>
    <v-container id="OurTeam">

            <h1 id="titleText"> Our Team </h1>

            <v-container id="imagecontainer">

                <TeamCard name="Name 1" position="Position" image="/images/sample_1.jpg"/>
                <TeamCard name="Name 2" position="Position" image="/images/sample_2.jpg"/>
                <TeamCard name="Name 3" position="Position" image="/images/sample_3.jpg"/>
                <TeamCard name="Name 4" position="Position" image="/images/sample_4.jpg"/>
                <TeamCard name="Name 5" position="Position" image="/images/sample_5.jpg"/>

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
        src: url('/fonts/RoxboroughCF-Bold.otf');
    }

    * {
        font-family: Roxborough;
    }
   
    #OurTeam {
        border: 0px solid black;
        width: 100%;     
    }
    
    #imagecontainer {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        width: 85%;
        margin: auto;
    }



    @media (max-width: 768px) {
        #imagecontainer {
            grid-template-columns: repeat(3, 2fr);
        }

        #imagecontainer > :nth-child(n+4):nth-child(-n+6) {
            justify-self: center;
            display: flex;
            align-items: center;
            transform: translateX(55%);
        }
    }

    @media (max-width: 480px) {
        #imagecontainer {
            grid-template-columns: 1fr;
        }
        #imagecontainer > :nth-child(n+4):nth-child(-n+6) {
            justify-self: center;
            display: flex;
            align-items: center;
            transform: none;
        }
    }


    #titleText {
        color: #E29062;
        text-align: center;
        font-size: max(2.5vw,35px);
    }

    #subtitleText {
        text-align: center;
        font-size: max(1.5vw, 19px);
        transform: translateY(-40%);
    }
</style>

<script setup>
  import TeamCard from '@/components/TeamCard.vue';
</script>