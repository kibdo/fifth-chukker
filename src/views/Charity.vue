<template>
<div class="h-screen w-full">
      <Slider />
    </div>
  <div class="text-center pt-6 px-3 flex flex-col items-center pb-10">
    <PageIntro
      title="Charity Program"
      description="A day of romance and celebration in the most breathtaking suroundings imaginable. The ideal venue for your event, offering unique and inspiring setting."
    />
    
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import PageIntro from "@/components/PageIntro.vue";
import InfoCard from "@/components/InfoCard.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import SimpleEnquiryForm from "@/components/SimpleEnquiryForm.vue";
export default {
  data() {
    return {
      slidesArray: [
        {
          imageSrc: "image-1.jpg",
          title: "Grays International School",
          description: "School Children with a future",
        },
        {
          imageSrc: "image-2.jpg",
          title: "Danbo international",
          description: "The future leaders of Nigeria",
        },
        {
          imageSrc: "image-4.jpg",
          title: "Dankwairo Intl school",
          description: "Giving the average child a chance to life",
        },
      ],
      jumbotronData: {
        title: "Charity",
        description:
          "We make your special day truly memorable when you choose to host your event at the Fifth Chukker polo and Equestrian Club",
      },
    };
  },
  name: "Charity",
  components: {
    Slider,
    PageIntro,
    InfoCard,
    Jumbotron,
    SimpleEnquiryForm,
  },
};
</script>

<style scoped>
</style>