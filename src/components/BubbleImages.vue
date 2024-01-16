<template>
    <a :href="url" class="bubble">
        <div class="shape magnetic">
            <img src="../assets/arrow.svg" alt="arrow">
        </div>
        <img :src="src" class="bubble-image">
    </a>
</template>
    
<script>
    export default {
        props: {
        src: String,
        url: String,
        }
    }
</script>
    
<style scoped>
    a {
        overflow: hidden;
        border-radius: 50%;
        position: relative;
        width: 100%;
        height: 100%;
        display: block;
    }

    .shape {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        left: -50%;
        top: -50%;
        position: absolute;
        background-color: var(--yellow);
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        z-index: 7;
        opacity: 0;
        transition: left 1s, top 1s, opacity 0.5s;
    }

    a:hover .shape {
        left: 0%;
        top: 0%;
        opacity: 1;
    }

    a img {
        width: 100%;
        height: 100%;
    }

    .shape img {
        max-width: 7.6rem;
        width: 100%;
        height: max-content;
    }

    .bubble-image {
        filter: blur(0px);
        transition: 1s var(--main-easing);
    }
    .bubble:hover .bubble-image {
        filter: blur(3px);
    }


</style>