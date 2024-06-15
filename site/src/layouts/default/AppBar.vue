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
    <img class="logo" src="../../../newLogo.png" />
    <div class="right-wrapper">
      <nav class="right-menu">
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
  font-size: 1.25rem;
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
}

.dropdown-content {
  border-radius: 15px;
  display: none;
  position: absolute;
  background-color: #E9E9E9;
  min-width: 200px;
  box-shadow: 0px 4px 12px 0px rgba(71, 71, 71, 0.2);
  z-index: 1;
  font-size: 1.25rem;
  right: 0; 
  padding: 20px;
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
    padding: 2rem;
  }

  .logo {
    width: 70vw;
    margin-bottom: 10px;
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
  }

  .dropdown-content a {
    font-size: 0.8rem !important;
    text-align: center;
  }
}

@media only screen and (max-width: 600px) {
  .top-nav {
    padding: 1rem;
  }


  .dropbtn, .join a {
    font-size: 1rem;
    color: #E59ECD;
  }

  .dropdown-content {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media only screen and (min-width: 600px) and (max-width: 768px) {
  .top-nav {
    padding: 1.5rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 992px) {
  .top-nav {
    padding: 1.5rem;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1200px) {
  .top-nav {
    padding: 1.5rem;
  }
}

@media only screen and (min-width: 1200px) {
  .top-nav {
    padding: 1.5rem;
  }
}

</style>

<script setup>
</script>
