<template>
  <div class="navigation fixed top-0 w-full">
    <NavBar />
  </div>
  <div class="main">
    <router-view />
  </div>
  <div class="pt-8">
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
  methods: {
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.navigation {
  z-index: 100000;
}
.main {
  z-index: 50;
}
.animated{
  opacity: 0;
  transition: all 1s ease;
  transition: opacity 1s ease;
}
* {
  font-family: "Montserrat", sans-serif;
}
</style>
<style>
.fade-in{
  opacity: 1;
}
.slide-up{
  animation: slideUp 1s ease 
}

  html{
    scroll-behavior: smooth;
  }
  body::-webkit-scrollbar{
    width: 0.25rem;
    color: #222624
  }
  body::-webkit-scrollbar-track{
    background-color: white;
  }
  body::-webkit-scrollbar-thumb{
    background-color: #e53e3e;
  }
</style>
