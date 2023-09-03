<template>
  <div class="jumbotron relative flex justify-center items-center">
    <div
      class="
        card
        absolute
        bg-white
        p-5
        flex flex-col
        items-center
        justify-center
        md:right-0
      "
    >
      <h3 class="text-3xl">{{ data.title }}</h3>
      <p class="mt-2 text-lg font-light text-center text-gray-700">
        {{ data.description }}
      </p>
      <div v-if="localUrlId">
        <a
        class="
          uppercase
          mt-6
          transition
          transform
          hover:translate-x-2
          hover:text-red-600
          duration-300
          tracking-wider
          font-semibold
          text-gray-800
        "
        :href="localUrlId"
        ><span v-if="actionBtnText">{{ actionBtnText }}</span> <span v-else>LEArn MORE</span> <span class="fa fa-arrow-right ml-2 text-red-600"></span>
      </a>
      </div>
      <div v-else>
        <router-link
        class="
        uppercase
          mt-6
          transition
          transform
          hover:translate-x-2
          hover:text-red-600
          duration-300
          tracking-wider
          font-semibold
          text-gray-800
        "
        :to="{name: data.urlName}"
        ><span v-if="actionBtnText">{{ actionBtnText }}</span> <span v-else>LEArn MORE</span> <span class="fa fa-arrow-right ml-2 text-red-600"></span>
      </router-link>
      </div>
      
    </div>
    <img class="cover-image" :src="getImageSrc(data.imageSrc)" alt="" />
  </div>
</template>

<script>
export default {
  props: ["data", 'localUrlId', "actionBtnText"],
  methods: {
    getImageSrc(name) {
      return require(`@/assets/images/${name}`)
    }
  },
};
</script>

<style scoped>
.jumbotron {
  height: 100vh;
  width: 100%;
}
.cover-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.card {
  width: 90%;
  height: 60%;
}
@media (min-width: 768px) {
  .card {
    width: 40%;
    height: 70%;
    margin-right: 3rem;
  }
  .jumbotron {
    height: 100vh;
    width: 100%;
  }
}
@media (min-width: 900px) {
  .card {
    width: 35%;
    height: 65%;
  }
}
@media (min-width: 1200px) {
  .card {
    width: 25%;
    margin-right: 8rem;
  }
}
</style>