<template>
  <div
    class="
      description-text
      py-4
      sm:pt-0
      sm:col-span-2
      sm:flex sm:flex-col
      sm:justify-center
    "
  >
    <img class="h-10 w-10" :src="iconUrl" alt="" />
    <h3 class="text-3xl text-gray-800">{{ title }}</h3>
    <p class="description-text text-lg text-gray-700 font-light">
      {{ getDescription }}
    </p>
    <div class="mt-5">
      <router-link
        class="
          transition-colors
          duration-200
          ease-out
          text-red-600
          border-2 border-red-600
          px-6
          py-2
          hover:text-white
          hover:border-red-600
          hover:bg-red-600
          tracking-wider
          md:px-10
        "
        :to="{name: urlName}"
        >SEE MORE</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "categoryRoute", "iconPhoto", 'urlName'],
  computed: {
    iconUrl() {
      return require(`@/assets/svgs/${this.iconPhoto}`);
    },
    getDescription() {
      const desc =
        this.description.length > 170
          ? `${this.description.slice(1, 170)}...`
          : this.description;
      return desc;
    },
  },
};
</script>

<style scoped>
</style>