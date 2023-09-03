<template>
  <div
    class="
      w-full
      flex flex-col
      border
      rounded-lg
      overflow-hidden
      h-auto
      relative
    "
  >
    <a @click.prevent="handleAddingToFavourites" href=""
      ><img
        ref="favImage"
        class="absolute h-8 w-8 right-0 m-3"
        :src="getFavourite.icon"
        alt=""
    /></a>
    <img src="@/assets/cover-photos/equestrian-cover.jpg" alt="" />
    <div class="px-4 py-3 flex flex-col justify-between h-full">
      <div>
        <a class="hover:text-red-600 transition duration-200" href="#">
          <h2 class="font-semibold text-xl">{{ title }}</h2>
        </a>
      </div>
      <div class="pt-3 flex justify-between items-center">
        <div class="flex flex-col">
          <span class="font-light text-sm text-gray-500">Price</span>
          <span class="font-bold">{{ getCurrency }} {{ price }}</span>
        </div>
        <div>
          <a
            class="
              font-semibold
              text-center
              px-6
              py-2
              border border-gray-600
              rounded-lg
              hover:text-white
              hover:bg-red-600
              hover:border-red-600
              transition
              duration-200
            "
            href="#"
            >Add to Cart</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFavourite: this.favourite,
    };
  },
  props: ["price", "title", "currency", "favourite"],
  computed: {
    getCurrency() {
      const currency = this.currency ? this.currency : "NGN";
      return currency;
    },
    getFavourite() {
      let value = this.isFavourite;
      let icon = this.isFavourite
        ? require("@/assets/svgs/favorite_black_24dp.svg")
        : require("@/assets/svgs/favorite_border_black_24dp.svg");
      return { value, icon };
    },
  },
  methods: {
    getFavIcon() {
      return require("@/assets/svgs/favorite_black_24dp.svg");
    },
    getUnFavIcon() {
      return require("@/assets/svgs/favorite_border_black_24dp.svg");
    },
    handleAddingToFavourites() {
      this.isFavourite = !this.isFavourite;
    },
  },
};
</script>

<style scoped>
</style>