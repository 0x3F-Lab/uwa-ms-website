<template>
  <div id='footer'>
    <div id='footer-inner'>
      <div id='footer-copyright'>
        <p>© 2024 UWA Marketing Society. All Rights Reserved. By using this website, you agree to the use of cookies. </p>
      </div>
      <div id='footer-logo'>
        <img src="/uwa-logo.svg" alt="UWA Logo">
      </div>
    </div>
  </div>
</template>

<style scoped>
  #footer {
    border-left: 3em solid #E9E9E9;
    border-right: 3em solid #E9E9E9;
  }

  #footer-inner {
    transition: ease all .05s;
    background-color: #E9E9E9;
    font-family: Roxborough;
    border-top: 1px solid #888;
    color: #484848;
    display: flex; 
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    position: relative;
    padding: 1.5em 2em 2em 2em;
    font-size: 0.9em;
  }

  #footer-logo {
    margin-left: auto;
  }

  #footer-logo > img {
    width: 8.5em;
  }

  @media only screen and (max-width: 768px) {
    #footer{ 
      font-size: 0.75em;
    }
  }
</style>