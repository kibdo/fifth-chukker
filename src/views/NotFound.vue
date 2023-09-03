<template>
<div class="">
    <LandingJumbotron :dataObj="headerDataObj" />
  </div>
</template>

<script>
import LandingJumbotron from "@/components/LandingJumbotron.vue";

export default {
  components: {
    LandingJumbotron,
  },
  data() {
    return {
      headerDataObj: {
        imageSrc: "polo-2.jpg",
        title: "404 Page Not Found",
        description: "",
      },
    }
  },
};
</script>

<style lang="scss" scoped>
</style>