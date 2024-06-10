// This is the app bar 

<template>
  <body>
    <img class="logo" src="../../../newLogo.png" width="500"/>
    <nav>
        <ul>
            <li>
                <div class="dropdown">
                    <button class="dropbtn">menu</button>
                    <div class="dropdown-content">
                        <a href="#">Become a Member</a>
                        <a href="#">About Us</a>
                        <a href="#">Events</a>
                        <a href="#">Join Our Committee</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </li>
        <ul>
        </ul>
            <li class="join">
                <a href= "#">Join Us!</a>
            </li>
        </ul>
    </nav>
  </body>
</template>

<style>
    @font-face {
        font-family: Roxborough;
        src: url('../../../fonts/RoxboroughCF-Bold.otf');
    }

    body{ 
        transition: ease all .05s;
        background-color: #E9E9E9; 
        font-family: Roxborough;
        height: 9.5vw;
        border-bottom: 1px solid #888;
    }

    a { 
        text-decoration: none; 
        color: #484848;
        font-size: 1.25em;
        font-weight: bold;
    } 

    /* menu drop down */
    nav ul li:first-child { 
        font-size: 1.25em;
        color: #697CAA;
        font-weight: bold;
        float: left; 
        margin-left: 6.25%;
        padding-top: 0.5%;
    }

    /* join link */
    nav ul li { 
        list-style:none;
        margin: 3.3%;
        float: right; 
        margin-right: 4.514%;
    }

    /* join button */
    .join{
        border-radius: 25px;
        background: #E59ECD;
        padding: 0.694% 2.431%;
        outline-style: solid;
        outline-color: #6c6c6c;
        outline-width: 1px;
    }

    .logo{
        position: absolute;
        left: 32.9%;
        right: 33%;
        width: 34%;
        padding-top: 2.6%;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: relative;
        display: inline-block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        border-radius: 15px;
        padding: 11.538%;
        display: none;
        position: absolute;
        background-color: #E9E9E9;
        min-width: 403.846%;
        box-shadow: 0px 4px 12px 0px rgba(71, 71, 71, 0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: #474747;
        font-size: 0.9em;
        padding: 6%;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {color: #E59ECD;}

    .dropdown:hover .dropdown-content {display: block;}

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        body{
            font-size: 6px;
            border-bottom: 0.5px solid #888;
            height: 9.9vw;
        }
        .join{
            outline-width: 0.5px;
        }
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) and (max-width: 768px) {
        body{
            font-size: 9px;
            height: 9.8vw;
        }
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) and (max-width: 992px) {
        body{
            font-size: 11px;
            height: 9.7vw;
        }
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) and (max-width: 1200px){
        body{
            font-size: 13px;
            height: 9.6vw;
        }
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        body{
            font-size: 16px;
        }
    }

</style>

<script setup>
</script>
