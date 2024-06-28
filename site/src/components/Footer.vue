<template>
  <div id='footer'>
    <div id='footer-inner'>
      <div id='footer-copyright'>
        <p>© 2024 UWA Marketing Society. All Rights Reserved. <span>Site designed and deployed by <a href="https://github.com/0x3F-Lab" target="_blank" rel="noreferrer noopener"><u>0x3F Lab.</u></a></span></p>
      </div>
      <div id='footer-logo'>
        <img src="/uwa-logo-gray.svg" alt="UWA Logo">
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: Roxborough;
  src: url('../../../fonts/RoxboroughCF-Bold.otf');
}

  #footer {
    border-top: 1px solid #888;
  }

  #footer-inner {
    transition: ease all .05s;
    background-color: #E9E9E9;
    font-family: Roxborough;
    color: #484848;
    display: flex; 
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    position: relative;
    padding: 1.5em 2em 2em 2em;
    font-size: 0.9em;
  }

  #footer-copyright {
    margin-right: 2em;
    font-size: 0.8em;
    font-family: 'HelveticaWorld', Arial, Helvetica, sans-serif;
    color: #363636;
  }

  #footer-copyright a {
    font-size: 0.8em;
    color: var(--orange)
  }


  #footer-logo {
    margin-left: auto;
    opacity: 0.8;
  }

  #footer-logo > img {
    width: 6.5em;
  }

  @media only screen and (max-width: 768px) {
    #footer{ 
      font-size: 0.65em;
    }

    #footer-copyright a {
      font-size: 1em;
    }
  }
</style>