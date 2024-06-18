<template>
  <div class='footer'>
    <div>
      <img id='uwa-guild-logo' src='../../public/uwa-guild-logo.svg' alt="UWA Student Guild Logo">
    </div>
    <div>
      <div id='footer-socials'>
        <a href="instagram://user?username=uwamarketingsociety" onclick="href='https\://www.instagram.com/uwamarketingsociety/'" target="_blank" rel="noopener noreferrer" id='socials-instagram'>
          <img src='../../public/instagram-logo.svg' alt="Instagram Logo">
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" id='socials-discord'>
          <img src='../../public/discord-logo.svg' alt="Discord Logo">
        </a>
      </div>
      <div id='footer-copyright'>
        <p>© 2024 UWA Marketing Society. All Rights Reserved </p>
        <p>By using this website, you agree to the use of cookies. </p>
      </div>
    </div>
    <div>
      <img id='uwa-logo' src="../../public/uwa-logo.svg" alt="UWA Logo">
    </div>
  </div>
</template>

<style scoped>
  .footer {
    transition: ease all .05s;
    background-color: #b6b6b6;
    font-family: Roxborough;
    border-top: 1px solid #888;
    color: #484848;
    display: flex; 
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    padding: 1em 2.5em;
    font-size: 0.85em;
  }

  .footer > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer > div:first-child {
    position: absolute;
    left: 3em;
  }

  .footer > div:last-child {
    position: absolute;
    right: 3em;
  }

  #footer-socials {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }

  #footer-socials img {
    width: 2em;
  }

  #uwa-guild-logo {
    width: 6em
  }

  #uwa-logo {
    width: 12em;
  }

  @media only screen and (max-width: 768px) {
    .footer{ 
      font-size: 0.65em;
    }

    .footer > div > svg,
    .footer > div > img {
      display: none;
    }
  }
</style>