<template>
  <header>
    <a href="#" class="logo">ViipeR</a>
    <div class="toggleMenu" @click="menuToggle"></div>

    <ul class="menu">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </header>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

a {
  text-decoration: none;
}

header {
  position: fixed; /* Make header fixed to the top */
  top: 0;
  left: 0;
  bottom: 60px; /* Set bottom to 60px */
  width: 100%;
  height: 60px; /* Set the height of the header */
  padding: 0 100px; /* Adjust padding to fit the new height */
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center items vertically */
  z-index: 999; /* Set z-index to make sure it stays on top */
  border-bottom: 1px solid #fff; /* Add border to the bottom */
  background-color: #4b79a1;
}

.logo {
  font-size: 2em;
  color: #fff;
  font-weight: 600;
}

.logo span {
  color: #023047;
}

.menu {
  position: relative;
  display: flex;
}
.menu li {
  display: flex;
  align-items: center;
}

.menu li a {
  color: #fff;
  padding: 0 50px;
  transition: all 0.5s ease;
}

.menu li a:hover {
  color: #faacaf;
}

@media (max-width: 991px) {
  header {
    align-items: center; /* Align items vertically */
    padding: 0 20px; /* Adjust padding for smaller screens */
  }

  ul.menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    background: #8bc1f1;
    z-index: 100;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .menu.active {
    display: flex;
  }
  .menu li a {
    color: #fff;
    margin-left: 0;
    font-size: 30px;
  }

  .toggleMenu {
    position: relative;
    width: 30px;
    height: 30px;
    background: url("https://i.postimg.cc/qvftb122/menu.png") no-repeat;
    background-size: 30px;
    cursor: pointer;
    background-position: center;
    z-index: 1000;
  }

  .toggleMenu.active {
    position: fixed;
    right: 44px;
    background: url("https://i.postimg.cc/hGsfGg60/close.png") no-repeat;
    background-position: center;
    background-size: 24px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
  methods: {
    menuToggle() {
      const toggleMenu = document.querySelector(".toggleMenu");
      const menu = document.querySelector(".menu");
      if (toggleMenu && menu) {
        toggleMenu.classList.toggle("active");
        menu.classList.toggle("active");
      }
    },
  },
});
</script>
