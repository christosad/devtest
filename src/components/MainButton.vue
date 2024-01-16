<template>
<a :href="url" class="main-btn">{{ label }}</a>
</template>

<script>
export default {
    props: {
    label: String,
    url: String,
  }
}
</script>

<style scoped>
a {
    color: var(--dark);
    background-color: var(--yellow);
    font-size: 1.8rem;
    font-weight: 400;
    border-radius: 3.7rem;
    padding: .8rem 2.7rem;
    display: inline-flex;
    align-items: center;
    transition: 0.5s;
}

a:after {
  content: "";
  position: relative;
  width: 1.6rem;
  height: 1.1rem;
  background-image: url('/src/assets/btn-arrow.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  margin-left: 1.6rem;
  transition: 0.5s;
}

a:hover {
  background-color: var(--light-color);
  color: var(--dark);
}

a:hover:after {
  transform: rotate(45deg);
}

@media (max-width: 550px) {
  a {
    font-size: 2.3rem;
    padding: 1.2rem 2.7rem;
  }

  a:after {
    width: 1.8rem;
    height: 1.5rem;
  }
}
</style>