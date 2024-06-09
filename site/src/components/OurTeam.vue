

<template>
    
    <v-container id="OurTeam">


            <h1> Our Team </h1>

                    
            <v-container id="imagecontainer">
                
                <img src="@/images/sample_man.jpg" alt="stock man">
                <img src="@/images/sample_man.jpg" alt="stock man">
                <img src="@/images/sample_man.jpg" alt="stock man">
                <img src="@/images/sample_man.jpg" alt="stock man">
                <img src="@/images/sample_man.jpg" alt="stock man">

            </v-container>



    </v-container>



</template>

<style>
   
    #OurTeam {
        background-color: black;
        border: 1px solid black;     
    }


    #imagecontainer {
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: space-around;
  

    }

    img {
        width: 14%;
        height: auto;
        margin: 1%;
    }

    h1 {
        color: orange;
        background-color: beige;
        text-align: center;
    }


</style>

<script setup>
  //
</script>
