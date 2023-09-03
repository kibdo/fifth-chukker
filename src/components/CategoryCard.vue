<template>
  <div :id="id" ref="card" class="hidden sm:block card relative">
    <div
      v-if="!alignTo"
      class="card sm:grid sm:grid-cols-5 sm:gap-12 lg:gap-20"
    >
      <Image ref="image" :imageSrc="data.imageSrc" />
      <Text
      ref="text"
        :iconPhoto="data.iconPhoto"
        :categoryRoute="data.categoryRoute"
        :title="data.title"
        :description="data.description"
        :urlName="data.urlName"
      />
    </div>
    <div v-if="alignTo" class="sm:grid sm:grid-cols-5 sm:gap-12 lg:gap-20 ">
      <Text
        :iconPhoto="data.iconPhoto"
        :categoryRoute="data.categoryRoute"
        :title="data.title"
        :description="data.description"
        :urlName="data.urlName"
      />
      <Image :imageSrc="data.imageSrc" />
    </div>
  </div>
  <div class="sm:hidden">
    <div class="sm:grid sm:grid-cols-5 sm:gap-12 lg:gap-20">
      <Image :imageSrc="data.imageSrc" />
      <Text
        :iconPhoto="data.iconPhoto"
        :categoryRoute="data.categoryRoute"
        :title="data.title"
        :description="data.description"
        :urlName="data.urlName"
      />
    </div>
  </div>
</template>

<script>
import Image from "@/components/CategoryCard/Image.vue";
import Text from "@/components/CategoryCard/Text.vue";
export default {
  
  computed: {
    alignTo() {
      console.log(this.$props.alignRight);
      return this.$props.alignRight;
    },
  },
  props: ["alignRight", "data", 'id'],

  components: {
    Image,
    Text,
  },
  data() {
    return {
      animated: false,
      
    };
  },
  
};
</script>

<style scoped>
.card {
  overflow: visible;
  transition: all 0.7s ease-out;
}
.hide-card{
  opacity: 0;
}
.show-card{
  opacity: 1;
  animation: slideUp .9s ease;
}

@keyframes slideUp {
  0%{
    top: 3rem;
  }
  100%{
    
    top: 0rem;
  }
}
</style>