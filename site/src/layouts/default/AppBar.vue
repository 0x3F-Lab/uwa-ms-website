<template>
  <div class="top-nav">
    <div class="left-wrapper">
      <nav class="left-menu">
        <ul>
          <li class="join">
            <a href="#">Join Us!</a>
          </li>
        </ul>
      </nav>
    </div>
    <img class="logo" src="/newLogo.png" />
    <div class="right-wrapper">
      <nav class="right-menu">
        <ul>
          <li>
            <div class="dropdown">
              <button class="dropbtn">menu</button>
              <div class="dropdown-content">
                <a href="#our-team">Become a Member</a>
                <a href="#our-team">About Us</a>
                <a href="#events">Events</a>
                <a href="#our-team">Join Our Committee</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: Roxborough;
  src: url('../../../fonts/RoxboroughCF-Bold.otf');
}

.top-nav { 
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #E9E9E9; 
  font-family: Roxborough;
  border-bottom: 1px solid #888;
  height: auto;
  transition: ease all .05s;
}

.left-wrapper, .right-wrapper {
  display: flex;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
}

.left-wrapper {
  flex: 1;
  justify-content: flex-start;
}

.right-wrapper {
  flex: 1;
  justify-content: flex-end;
}

a { 
  text-decoration: none; 
  color: #484848;
  font-size: 1.2rem;
  font-weight: bold;
} 

nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.logo {
  width: 30vw;
  flex: 0 1 auto;
}

.dropdown {
  position: relative;
}

.dropbtn {
  background: none;
  border: none;
  font-size: 1.25rem;
  font-weight: bold;
  color: #697CAA;
  cursor: pointer;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

.dropbtn:hover {
    color: var(--orange);
  }

.dropdown-content {
  border-radius: 15px;
  display: none;
  position: absolute;
  background-color: #E9E9E9;
  min-width: 15rem;
  box-shadow: 0px 4px 12px 0px rgba(71, 71, 71, 0.2);
  z-index: 1;
  font-size: 1.2rem;
  right: 0; 
  padding: 1rem;
  text-align: right;
  margin-right: -1.5rem;
}

.dropdown-content a {
  color: #474747;
  padding: 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  color: #E59ECD;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.join {
  border-radius: 25px;
  background: #E59ECD;
  padding: 10px 20px;
  outline-style: solid;
  outline-color: #6c6c6c;
  outline-width: 1px;
}

@media only screen and (max-width: 768px) {
  .top-nav {
    flex-direction: column;
    align-items: center;
    padding-bottom: 0.2rem;
  }

  .logo {
    width: 70vw;
    margin-top: 0.5rem;
  }

  .left-menu, .right-menu {
    width: 100%;
    justify-content: center;
  }

  .left-menu {
    order: 1;
    display: none;
  }

  .right-menu {
    order: 2;
  }

  .dropdown-content {
    left: 50%;
    transform: translateX(-50%);
    min-width: 11rem;
    padding: 0.5rem;
  }

  .dropdown-content a {
    font-size: 0.8rem !important;
    text-align: center;
  }
}

@media only screen and (max-width: 600px) {
  .dropbtn, .join a {
    font-size: 1rem;
  }

  .dropbtn{
    padding-bottom: 0.6rem;
    padding-top: 0.6rem;
  }
}

</style>

<script setup>
</script>
