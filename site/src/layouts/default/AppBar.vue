// This is the app bar 

<template>
  <body>
    <img class="logo" src="../../../logo.svg" width="500"/>
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
        background-color: #E9E9E9; 
        font-family: Roxborough;
        height: 160px;
        border-bottom: 1px solid #888;
    }

    a { 
        text-decoration: none; 
        color: #474747;
        font-size: 20px;
        font-weight: bold;
    } 

    /* menu drop down */
    nav ul li:first-child { 
        font-size: 20px;
        color: #697CAA;
        font-weight: bold;
        float: left; 
        margin-left: 90px;
        padding-top: 10px;
    }

    /* join link */
    nav ul li { 
        list-style:none;
        margin:55px;
        float: right; 
        margin-right: 65px;
    }

    /* join button */
    .join{
        border-radius: 25px;
        background: #E59ECD;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 35px;
        padding-right: 35px;
        outline-style: solid;
        outline-color: #484848;
        outline-width: thin;
    }

    .logo{
        position: absolute;
        left: 32%;
        right: 33%;
        width: 36%;
        padding-top: 49px;
    }

    /* The container <div> - needed to position the dropdown content */
    .dropdown {
        position: relative;
        display: inline-block;
    }

    /* Dropdown Content (Hidden by Default) */
    .dropdown-content {
        border-radius: 15px;
        padding: 6px;
        display: none;
        position: absolute;
        background-color: #E9E9E9;
        min-width: 210px;
        box-shadow: 0px 4px 12px 0px rgba(71, 71, 71, 0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: #474747;
        font-size: 18px;
        padding: 12px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {color: #E59ECD;}

    .dropdown:hover .dropdown-content {display: block;}

</style>

<script setup>
</script>
