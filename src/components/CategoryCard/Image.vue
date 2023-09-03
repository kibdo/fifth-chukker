<template>
  <div
    class="
      card-img-container
      overflow-hidden
      shadow-2xl
      sm:shadow-none
      sm:col-span-3
    "
  >
    <img
      class="thumbnail w-full h-full object-cover shadow-2xl"
      :src="getImageSrc(imageSrc)"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: ["imageSrc"],
  methods: {
    getImageSrc(imageSrc) {
      return require(`@/assets/images/${imageSrc}`);
    },
  },
};
</script>

<style scoped>
.card-img-container {
  max-height: 15rem;
  max-height: 13rem;
  overflow: hidden;
}

@media (min-width: 640px) {
  .card-img-container {
    max-height: 27rem;
    overflow: visible;
  }
  .thumbnail:hover {
    animation: floatingImage 1s ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
}
@media (min-width: 900px) {
  .card-img-container {
    height: 28rem;
  }
}
@keyframes floatingImage {
  0% {
    margin-top: 2.5px;
  }
  100% {
    margin-top: -5px;
  }
}
</style>