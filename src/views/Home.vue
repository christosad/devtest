<template>
    <section class="hero-section">
        <h1 class="main-heading">Greece the birthplace of ideas</h1>
        <div class="bubble1"><BubbleImages :url="`zz`" :src="`/assets/image1.jpg`" /></div>
        <div class="bubble2"><BubbleImages :url="`zzz`" :src="`/assets/image2.jpg`" /></div>
        <div class="bubble3"><BubbleImages :url="`zzzz`" :src="`/assets/image3.jpg`" /></div>
        <div class="content"><p>
            Right in the cradle of Western civilization and at the heart  of contemporary innovation, we invite innovative minds,  ecosystem-driving entrepreneurs and leading investors  to explore, grow, and invest in a country that blends rich history, captivating culture and a promising entrepreneurial ecosystem.
        </p>
        <MainButton :url="`/`" :text="`Become a citizen`" />
        </div>
        <div class="bubble4"><BubbleImages :url="`zzzzz`" :src="`/src/assets/image4.jpg`" /></div>
    </section>
    <section class="section2">
        <h2 class="main-heading">Discover innovation opportunities</h2>
        <ul>
            <li><a href="#">Talents<Arrow/></a></li>
            <li><a href="#">Enterpreneurs<Arrow/></a></li>
            <li><a href="#">Investors<Arrow/></a></li>
        </ul>
    </section>
</template>

<script setup>
import MainButton from '../components/MainButton.vue'
import BubbleImages from '../components/BubbleImages.vue'
import Arrow from '../components/Arrow.vue'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
</script>

<style scoped>
section.hero-section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 var(--grid-gap);
    gap: 2.5rem;
}

section.hero-section div ,
section.hero-section h1{
    flex-basis: 32%;
}

section.hero-section p {
    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 300;
    color: var(--light-color);
    margin-bottom: 2.4rem;
}

@media (max-width: 1024px) {
    section.hero-section div,
    section.hero-section h1 {
        flex-basis: 48%;
    }

    section {
        transition: filter 0.5s;
    }

    body.blured section {
        filter: blur(1px);
    }
}

/* Section2 */

section.section2 {
    padding: 0 var(--grid-gap);
    margin-top: 6.4rem;
}
section.section2 ul {
    padding: 0;
    margin-top: 9.6rem;
}
section.section2 li {
    list-style-type: none;
    margin: 0;
}

section.section2 li a {
    display: flex;
    justify-content: space-between;
    border-top: .2rem solid var(--light-color);
    font-size: 2.4rem;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--light-color);
    padding: 1rem 0rem;
    margin-bottom: 4.8rem;
    position: relative;
    transition: 0.5s;
}

section.section2 li a:before {
    content: "";
    position: absolute;
    left: 0;
    top: -0.1rem;
    width: 0%;
    height: 0.15rem;
    background-color: var(--yellow);
    transition: 0.7s;
}

section.section2 li a:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 35rem;
    height: 0%;
    transition: 0.7s;
    background-color: var(--yellow);
    z-index: -1;
}

section.section2 li a:hover:after {
    height: 100%;
}

section.section2 li a:hover:before {
    width: 100%;
}

section.section2 li a svg {
    width: 2rem;
    height: 2rem;
    padding-top: 0.5rem;
    display: block;
    overflow: visible;
}

section.section2 li a :not(svg) {
    transition: 0.5s;
    width: 2rem;
    height: 2rem;
    fill: var(--light-color);
}

section.section2 li a:hover :not(svg) {
    fill: var(--yellow);
}

@media (min-width: 551px) {
    section.section2 li a:hover {
        color: var(--dark);
        padding: 1rem 0rem 1rem 1rem;
    }
}

@media (max-width: 550px) {

  section.hero-section {
    gap: 1rem;
  }
  section.hero-section div {
    flex-basis: 48%;
  }

  section.hero-section div.content,
  section.hero-section h1 {
    flex-basis: 100%;
    margin-top: 3rem;
  }

  section.hero-section div.content {
    order: 10;
  }

  /*section.hero-section .bubble1 a {
    transform: translate(50%, 50%);
  }

  section.hero-section .bubble2 a {
    transform: translate(-50%, 50%);
  }

  section.hero-section .bubble3 a {
    transform: translate(50%, -50%);
  }

  section.hero-section .bubble4 a {
    transform: translate(-50%, -50%);
  }*/

  /* Section2 */

  section.section2 ul {
    margin-top: 6.5rem;
  }

  section.section2 li a {
    margin-bottom: 2.8rem;
  }

  section.section2 li a:after {
    display: none;
  }

  section.section2 .main-heading {
    margin-top: 10rem;
  }

  section.section2 li a {
    padding: 2rem 0 1rem 0;
  }

  section.section2 li a svg {
    padding-top: 0;
  }
}


</style>
