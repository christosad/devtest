<template>
<header :class="{ 'active': isClassActive }" id="header">
  <div class="nav-column column1">
    <span>#LIVEINGREECE</span>
  </div>
  <div class="nav-column column2">
    <template v-if="tablet"> <!--Tablet / Mobile-->
    <span class="menu-text">Menu</span>
    <div @click="toggleClass" class="burger-menu" >
      <div class="lines line1"></div>
      <div class="lines line2"></div>
      <div class="lines line3"></div>
    </div>
    <div class="dropdownmenu">
      <ul class="main-menu">
      <li><span class="capitalize">For</span></li>
      <li><a href="#">Talents</a></li>
      <li><a href="#">Entrepreneurs</a></li>
      <li><a href="#">Investors</a></li>
    </ul>

    <ul class="secondary-menu">
      <li><span class="capitalize">Initiatives</span></li>
      <li><a href="#">Q&A</a></li>
    </ul>
    </div>
  </template>
  <template v-else> <!--Desktop-->
    <ul class="main-menu">
      <li><span class="capitalize">For</span></li>
      <li><a href="#">Talents</a></li>
      <li><a href="#">Entrepreneurs</a></li>
      <li><a href="#">Investors</a></li>
    </ul>

    <ul class="secondary-menu">
      <li><span class="capitalize">Initiatives</span></li>
      <li><a href="#">Q&A</a></li>
    </ul>
  </template>
  </div>
</header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      tablet: window.innerWidth < 1024,
      isClassActive: false
    };
  },
  created() {
    // Update the condition when the window is resized
    window.addEventListener('resize', this.handleWindowResize);
  },
  destroyed() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('resize', this.handleWindowResize);
  },
  methods: {
    handleWindowResize() {
      // Update the condition when the window is resized
      this.tablet = window.innerWidth < 1024;
    },
    toggleClass() {
      this.isClassActive = !this.isClassActive;
    }
  }
}
</script>

<style scoped>
header {
  padding: 3.2rem var(--grid-gap);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 9;
}

header ul {
  padding: 0;
  display: inline-flex;
  gap: 2.4rem;
}

header ul li {
  list-style-type: none;
  margin: 0;
}

header ul li a,
header .column1 span,
header ul span {
  font-size: 1.8rem;
  font-weight: 300;
  text-transform: uppercase;
  color: var(--light-color);
  position: relative;
}

body .capitalize {
  text-transform: capitalize;
}

header ul.secondary-menu {
  margin-left: 9.3rem;
}

header ul li a:before {
  content: "";
  position: absolute;
  left: 0;
  top: calc(50% - 0.5px);
  width: 0%;
  height: 1px;
  display: block;
  background-color: var(--yellow);
  transition: 0.5s;
}

header ul li a:hover:before {
  width: 100%;
}

/* Tablet / Mobile */

.burger-menu .lines {
  background-color: var(--light-color);
  width: 4rem;
  height: 0.1rem;
  display: block;
  transition: 0.5s;
}

.burger-menu .line2 {
  margin: 0.7rem 0;
  transition: 0.5s;
}

.menu-text {
  font-size: 2rem;
  font-weight: 300;
  color: var(--light-color);
  margin-right: 2rem;
}

.active .burger-menu .line1 {
  transform: rotate(45deg) translate(-0.9rem, -1.4rem);
  transform-origin: left;
}

.active .burger-menu .line2 {
  opacity: 0;
  height: 0;
  margin: 0;
  transition: 0.5s;
}

.active .burger-menu .line3 {
  transform: rotate(-45deg) translate(-0.4rem, 1rem);
  transform-origin: left;
}

.active .nav-column .burger-menu .lines {
  background-color: var(--dark);
}

.active .nav-column .menu-text {
  color: var(--dark);
}

@media (max-width: 1024px) {
  header .nav-column {
    display: flex;
    align-items: center;
  }

  .dropdownmenu {
    position: fixed;
    top: 0;
    right: 0;
    width: 40rem;
    border-radius: 0 0 0 10rem;
    background-color: var(--yellow);
    z-index: -1;
    padding-bottom: 5rem;
    transform: translate(100%, -100%);
    transition: 1s;
  }

  .active .dropdownmenu {
    transform: translate(0%, -0%);
  }

  header ul {
    display: block;
    padding: 2rem 6rem;
  }

  header ul li {
    margin: 0.5rem 0;
  }

  header ul li a:before {
    background-color: var(--dark);
  }
  header ul.secondary-menu {
    margin: 0;
  }

  header ul li a,
  header ul span {
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--dark);
  }
}

@media (max-width: 550px) {
  .active .column1 span {
    color: var(--dark);
  }

  .dropdownmenu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translate(0%, -100%);
    border-radius: 0;
  }

  .active .dropdownmenu {
    border-radius: 0 0 5rem 5rem;
  }

  header ul {
    padding: 2rem var(--grid-gap);
  }

  .secondary-menu {
    width: 11.7rem;
  }

  header ul li a,
  header .column1 span,
  header ul span {
    font-size: 2.5rem;
  }

  .menu-text {
    font-size: 2.3rem;
  }
}

</style>