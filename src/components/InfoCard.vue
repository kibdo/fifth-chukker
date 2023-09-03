<template>
  <div ref="card" class="flex flex-col sm:flex-row sm:items-center w-full card">
    <div
      :class="{
        orderFirst: imageRight === true,
        orderSecond: imageRight === false,
      }"
      class="
        py-12
        w-full
        px-8
        sm:py-0
        sm:w-1/2
        sm:px-8
        md:px-10
        lg:px-20
        flex flex-col
        justify-center
      "
    >
      <img class="h-10 w-10" src="@/assets/svgs/equestrian.svg" alt="" />
      <div class="flex flex-col">
        <h3 class="text-3xl title">{{ title }}</h3>
        <div class="title-decoration"></div>
      </div>
      
      <p class="description-text text-lg font-light">
        {{ description }}
      </p>
      <div class="mt-6 md:mt-10">
        <a
          class="
          action-btn
            uppercase
            transition-colors
            duration-200
            ease-out
            px-4
            py-2
            tracking-wider
            md:px-8
            md:py-3
          "
          :href="localUrlId"
          ><span v-if="actionBtnText">{{ actionBtnText }}</span> <span v-else>SEND eNQUIRY</span> </a
        >
      </div>
    </div>
    <div
      :class="{
        orderFirst: imageRight === false,
        orderSecond: imageRight === true,
      }"
      class="
        relative
        w-full
        sm:w-1/2
        card-img-container
        flex flex-col
        justify-center
        sm:mt-0
        h-full
        w-full
      "
    >
      <img
        class="absolute top-0 w-full h-full thumbnail object-cover"
        :src="getimageSrc"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["imageRight", "title", "description", "imageSrc", 'localUrlId', "actionBtnText"],
  computed: {
    getimageSrc() {
      return require(`@/assets/images/${this.imageSrc}`);
    },
  },
  mounted(){
    
  }
};
</script>

<style scoped>
.action-btn{
  color: white;
  border: 2px solid #e53e3e;
  background-color: #e53e3e;
}
.action-btn:hover{
  color: white;
  border: 2px solid #963e3e;
  background-color: #963E3E;
}
.title{
  
}
.card{
  background-color: #0D0404;
  color: rgb(216, 216, 216);
}
.card-img-container {
  height: 25rem;
}
.title-decoration{
  height: 0.2rem;
  width: 5rem;
  background-color: #e53e3e;
}
.description-text{
  margin-top: 1rem;
}
@media (min-width: 640px) {
  .card-img-container {
    height: 25rem;
  }
  .orderFirst {
    order: 1;
  }
  .orderSecond {
    order: 2;
  }
}
@media (min-width: 900px) {
  .card-img-container {
  }
}
</style>