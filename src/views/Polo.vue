<template>
  <div class="">
    <LandingJumbotron :dataObj="headerDataObj" />
  </div>
  <div data-animation-class="slide-up" class="animated text-center pt-6 px-3 flex flex-col items-center pb-10">
    <PageIntro
      title="Special Venues"
      description="A day of romance and celebration in the most breathtaking suroundings imaginable. The ideal venue for your event, offering unique and inspiring setting."
    />
  </div>
  <div>
    <div data-animation-class="slide-up" class="animated">
      <InfoCard
      imageSrc="event-4.jpg"
      title="Weddings"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur veritatis deleniti voluptas, impedit ratione recusandae fuga praesentium, amet incidunt inventore exercitationem eligendi illo quas perspiciatis atque eum sapiente possimus."
      :imageRight="true"
      localUrlId= '#enquiryForm'
      actionBtnText = 'submit enquiry'
    />
    </div>
    <div data-animation-class="slide-up" class="animated">
      <InfoCard
      imageSrc="event-6.jpg"
      title="Social Events"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et fugit tempora, amet ducimus alias impedit eum repudiandae aliquam? Veniam totam consequuntur corporis obcaecati aliquam aut dicta doloremque illo quae quasi."
      :imageRight="false"
      localUrlId= '#enquiryForm'
      actionBtnText = 'submit enquiry'
    />
    </div>
    <div data-animation-class="slide-up" class="animated">
      <InfoCard
      imageSrc="event-2.jpg"
      title="Corporate"
      description="Lorem ipsum dolor sit amet consectetur, adipisicing eimpedit eum repudiandae aliquam? Veniam totam consequuntur corporis obcaecati aliquam aut dicta doloremque illo quae quasi."
      :imageRight="true"
      localUrlId= '#enquiryForm'
      actionBtnText = 'submit enquiry'
    />
    </div>
  </div>
  <div data-animation-class="fade-in" class="animated py-16">
    <Jumbotron :data="jumbotronData" localUrlId='#enquiryForm' actionBtnText ='Learn more'/>
  </div>
  <div data-animation-class="slide-up" class="animated">
    <SimpleEnquiryForm elementId="enquiryForm"/>
  </div>
</template>

<script>
import LandingJumbotron from "@/components/LandingJumbotron.vue";
import PageIntro from "@/components/PageIntro.vue";
import InfoCard from "@/components/InfoCard.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import SimpleEnquiryForm from "@/components/SimpleEnquiryForm.vue";
import SlideAnimation from "@/support/SlideAnimation.js";
export default {
  name: "Polo",
  components: {
    LandingJumbotron,
    PageIntro,
    InfoCard,
    Jumbotron,
    SimpleEnquiryForm,
  },
  data() {
    return {
      headerDataObj: {
        imageSrc: "polo-1.jpg",
        title: "Dine",
        description: "Local and Intercontinental dishes",
      },
      jumbotronData: {
        title: "Polo",
        description:
          "We make your special day truly memorable when you choose to host your event at the Fifth Chukker polo and Equestrian Club",
        imageSrc: 'event-2.jpg'
      
      },
    };
  },
  mounted () {    
    this.cardAnimation = SlideAnimation
    setTimeout(() => {document.addEventListener("scroll", this.cardAnimation)}, 1000)
  },
  beforeMount(){
    scrollTo(0, 0)
  },
  beforeUnmount () {
    document.removeEventListener('scroll', this.cardAnimation)
  },
};
</script>

<style scoped>

</style>