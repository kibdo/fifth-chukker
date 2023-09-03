<template>
  <div id="info-card" class="text-center flex flex-col items-center py-8 lg:py-16 px-3 card">
    <h3 class="text-3xl text-gray-800 uppercase tracking-wider capitalize">
      {{ title }}
    </h3>
    <p class="club-disc text-gray-700 font-light mt-3">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["title", "description"],
};
</script>

<style scoped>
.club-disc {
  max-width: 40rem;
}
</style>