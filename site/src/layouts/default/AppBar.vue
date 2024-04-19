// This is the app bar

<template>
  <body>
    <img class="logo" src="../../../logo.svg" width="500"/>
    <nav>
        <ul>
            <li>
                <a href= "#">menu</a>
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
  body{ 
      background-color: #E9E9E9; 
      font-family: Roxborough;
  }

  a { 
      text-decoration: none; 
      color: #474747;
      font-size: 20px;
      font-weight: bold;
    } 
    
  nav ul li:first-child { 
      float: left; 
      margin-left: 70px;
      padding-top: 10px;
  }

  nav ul li { 
      list-style:none;
      margin:40px;
      float: right; 
      margin-right: 60px;
    }

  .join{
      border-radius: 25px;
      background: #E59ECD;
      padding-top: 10px;
      padding-bottom: 13px;
      padding-left: 35px;
      padding-right: 35px;
      outline-style: solid;
      outline-color: #474747;
      outline-width: thin;
  }

  .logo{
      position: absolute;
      left: 30%;
      right: 30%;
      width: 40%;
      padding-top: 30px;
  }

  .line {
      border-bottom: 1px solid #888;
    }
</style>

<script setup>
</script>
