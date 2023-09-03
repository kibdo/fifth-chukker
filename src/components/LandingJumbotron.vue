<template>
  <div class="h-screen">
    <div class="w-full h-full flex justify-center items-center">
      <div class="overlay"></div>
      <img
        class="w-full h-full object-cover"
        :src="getImageUrl(dataObj.imageSrc)"
        alt=""
      />
      <div class="absolute text-center text-white px-2">
        <h2 ref="title" class="title capitalize tracking-widest relative">
          {{ dataObj.title }}
        </h2>
        <p ref="desc" class="desc uppercase font-light tracking-widest text-sm md:text-lg">
          {{ dataObj.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataObj"],
  methods: {
    getImageUrl(imageSrc) {
      return require(`../assets/images/${imageSrc}`);
    },
  },
  data() {
    return {};
  },
  mounted () {
    setTimeout(() => {
      this.$refs.title.classList.add('titleAnimation')
    },1000)
    setTimeout(() => {
      this.$refs.desc.classList.add('descriptionAnimation')
    },2000)
    
  },
};
</script>

<style scoped>
.overlay{
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.5);
}
.title{
  opacity: 0;
  transition: all 1s ease;
  font-size: 2.7rem;
}
.desc{
  opacity: 0;
  transition: all 1s ease;
  font-size: 0.8rem;
}
.titleAnimation{
  opacity: 1;
  animation: animateTitle 1s ease-in;
}
.descriptionAnimation{
  opacity: 1;
}
@keyframes animateTitle{
0%{
  transform: translateY(-4rem);
}
15%{
 transform: translateY(0rem);
}
45%{
  transform: translateY(-.8rem);
}
60%{
  transform: translateY(0rem);
}
85%{
  transform: translateY(-0.2rem);
}
100%{
  transform: translateY(0rem);
}
}
@media (min-width: 640px) {
  .title {
    font-size: 4rem;
    font-stretch: ultra-expanded;
  }
  .desc{
  font-size: 1rem;
}
}
@media (min-width: 1200px) {
  .title {
    font-size: 5rem;
    font-stretch: ultra-expanded;
  }
}
</style>