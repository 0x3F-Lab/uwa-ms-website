<template>
    <div id="OurTeam">

            <h1 id="titleText"> Our Team </h1>

            <v-container id="imagecontainer">

                <TeamCard name="Name 1" position="Position" image="/images/sample_1.jpg"/>
                <TeamCard name="Name 2" position="Position" image="/images/sample_2.jpg"/>
                <TeamCard name="Name 3" position="Position" image="/images/sample_3.jpg"/>
                <TeamCard name="Name 4" position="Position" image="/images/sample_4.jpg"/>
                <TeamCard name="Name 5" position="Position" image="/images/sample_5.jpg"/>

            </v-container>

            <h1 id="subtitleText">Want to join us? Positions are <span 
                style="color: var(--blue)">open</span>! Apply 
                <a target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                style="color: var(--orange); text-decoration: underline;">here</a></h1>

            </div>
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
        padding: 4vh;
        border: 0px solid black;
        width: 100%;
        background-color: var(--off-white);
    }

    #imagecontainer {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
        width: 85%;
        margin: auto;
    }

    #titleText {
        color: var(--orange);
        text-align: center;
        font-size: 2.4em;
    }

    #subtitleText {
        text-align: center;
        transform: translateY(-40%);
        font-size: 1.3em;
    }

    /* Responsive styles */
    @media only screen and (max-width: 1280px) {
        #titleText {
            font-size: 2em !important;
        }

        #subtitleText, a {
            font-size: 1.1em !important;
        }
    }

    @media only screen and (max-width: 900px) {
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

    @media only screen and (max-width: 768px) {
        #titleText {
            font-size: 1.5em !important;
        }

        #subtitleText, a {
            font-size: 1em !important;
        }

        #imagecontainer {
            grid-template-columns: repeat(3, 2fr);
            gap: 0.5rem;
        }
    }

    @media only screen and (max-width: 480px) {
        #imagecontainer {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
        }
        #imagecontainer > :nth-child(n+4):nth-child(-n+6) {
            transform: none;
        }

        #imagecontainer > :nth-child(5) {
            transform: translateX(55%) !important;
        }
    }
</style>

<script setup>
  import TeamCard from '@/components/TeamCard.vue';
</script>