<template>
  <div class="">
    <LandingJumbotron :dataObj="headerDataObj" />
  </div>
  <div class="text-center pt-6 px-3 flex flex-col items-center pb-10">
    <PageIntro
      title="Special Venues"
      description="A day of romance and celebration in the most breathtaking suroundings imaginable. The ideal venue for your event, offering unique and inspiring setting."
    />
  </div>
  <div
    class="
      main
      grid grid-cols-1
      gap-5
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      px-3
      py-8
    "
  >
    <ShopCard
      title="Polo Cap"
      :price="200"
      imageSrc="image-1.jpg"
      :favourite="false"
    />
    <ShopCard
      title="Polo Mallet"
      :price="200"
      imageSrc="image-4.jpg"
      :favourite="true"
    />
    <ShopCard
      title="Arabian Horse"
      :price="200"
      imageSrc="image-3.jpg"
      :favourite="true"
    />
    <ShopCard
      title="Chicken Eggs(crate)"
      :price="200"
      imageSrc="image-1.jpg"
      :favourite="false"
    />
    <ShopCard
      title="Helmet"
      :price="200"
      imageSrc="image-2.jpg"
      :favourite="false"
    />
  </div>
  <div>
    <SimpleEnquiryForm />
  </div>
  <div class="hidden">
    <h1 class="sm:hidden text-3xl">Extra Small Screen</h1>
    <h1 class="hidden sm:block md:hidden text-3xl">Small Screen</h1>
    <h1 class="hidden md:block lg:hidden text-3xl">Medium Screen</h1>
    <h1 class="hidden xl:block xl:hidden text-3xl">Large Screen</h1>
  </div>
</template>

<script>
import LandingJumbotron from "@/components/LandingJumbotron.vue";
import PageIntro from "@/components/PageIntro.vue";
import SimpleEnquiryForm from "@/components/SimpleEnquiryForm.vue";
import ShopCard from "@/components/ShopCard.vue";
import InfoCard from "@/components/InfoCard.vue";
export default {
  name: "Shop",
  components: {
    LandingJumbotron,
    PageIntro,
    InfoCard,
    SimpleEnquiryForm,
    ShopCard,
  },
  data() {
    return {
      headerDataObj: {
        imageSrc: "polo-4.jpg",
        title: "Shop",
        description: "making special moments",
      },
      jumbotronData: {
        title: "Shop",
        description:
          "We make your special day truly memorable when you choose to host your event at the Fifth Chukker polo and Equestrian Club",
      },
    };
  },
  beforeMount(){
    scrollTo(0, 0)
  },
};
</script>

<style scoped>
.main {
  width: 100%;
}
</style>