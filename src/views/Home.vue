<template>
  <div>
    <LandingJumbotron :dataObj="headerDataObj" />
  </div>
  <div data-animation-class="slide-up" class="relative animated text-center flex flex-col items-center">
    <PageIntro
      title="Fifth Chukker Polo Club"
      description="Enter the exciting world of the Fifth Chukker Polo and Equestrian Club.
      Where prestigious sporting disciplines meet a sparkling social calender"
    />
  </div>
  <div  v-for="category in sortedCategories" :key="category">
    <div
    data-animation-class="slide-up"
    
    
      v-if="category.card"
      :class="{ negativeCardMargin: category.position == 2 }"
      class="relative animated px-3 py-8 sm:px-12 lg:px-32 xl:px-48"
    >
      <CategoryCard
        :id="`category-card-${category.id}`"
        :data="category.category"
        :alignRight="category.id % 2 == 0 ? false : true"
      />
    </div>
    <div data-animation-class="fade-in" v-else  class="relative animated py-8">
      <Jumbotron :data="category.category" />
    </div>
  </div>

  <div class="hidden">
    <h1 class="sm:hidden text-3xl">Extra Small Screen</h1>
    <h1 class="hidden sm:block md:hidden text-3xl">Small Screen</h1>
    <h1 class="hidden md:block lg:hidden text-3xl">Medium Screen</h1>
    <h1 class="hidden xl:block xl:hidden text-3xl">Large Screen</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from "@/components/Jumbotron.vue";
import LandingJumbotron from "@/components/LandingJumbotron.vue";
import CategoryCard from "@/components/CategoryCard.vue";
import NavBar from "@/components/NavBar.vue";
import PageIntro from "@/components/PageIntro.vue";
import SlideAnimation from "@/support/SlideAnimation.js";
export default {
  name: "Home",
  components: {
    LandingJumbotron,
    CategoryCard,
    Jumbotron,
    PageIntro,
  },
  computed: {
    sortedCategories() {
      let count = 0;
      const categoryCards = [];
      for (
        let categoryId = 0;
        categoryId < this.categories.length;
        categoryId++
      ) {
        if (count < 2) {
          categoryCards.push({
            position: count + 1,
            id: categoryId + 1,
            category: this.categories[categoryId],
            card: true,
          });
          count++;
        } else {
          categoryCards.push({
            id: categoryId + 1,
            category: this.categories[categoryId],
            card: false,
          });
          count = 0;
        }
      }
      return categoryCards;
    },
  },
  data() {
    return {
      headerDataObj: {
        imageSrc: "polo-2.jpg",
        title: "Best of both worlds",
        description: "ALL THINGS EQUESTRIAN AND LEISURE IN DUBAI",
      },
      categories: [
        {
          title: "Polo",
          imageSrc: "polo-2.jpg",
          iconPhoto: "equestrian.svg",
          categoryRoute: "polo",
          description:
            "Discover the rich heritage of polo, known as the Sport of kings, in contemporary and lively surroundings with well-maintained Polo fields and advanced facilities",
          urlName: 'Polo',
        },
        {
          title: "Equestrian",
          imageSrc: "polo-1.jpg",
          iconPhoto: "equestrian.svg",
          categoryRoute: "equestrian",
          description:
            "Discover the rich heritage of polo, known as the Sport of kings, in contemporary and lively surroundings with well-maintained Polo fields and advanced facilities",
          urlName: 'Equestrian',
        },
        {
          title: "Dine",
          imageSrc: "dine-1.jpg",
          iconPhoto: "equestrian.svg",
          categoryRoute: "dine",
          description:
            "Discover the rich heritage of polo, known as the Sport of kings, in contemporary and lively surroundings with well-maintained Polo fields and advanced facilities",
          urlName: 'Dine',
        },
        {
          title: "Events",
          imageSrc: "event-1.jpg",
          iconPhoto: "equestrian.svg",
          categoryRoute: "events",
          description:
            "Discover the rich heritage ghtejg u;orwygwr o, known as the Sport of kings, in cofefuj hgdfgew yygfdyeg ntemporary and lively surroundings with well-maintained Polo fields and advanced facilities",
          urlName: 'Events',
        },
        {
          title: "Accomodation",
          imageSrc: "dine-2.jpg",
          iconPhoto: "equestrian.svg",
          categoryRoute: "accomodation",
          description:
            "Discover the rich heritndings with well-maintained Polo fields and advanced facilities",
          urlName: 'Accomodation',
        },
      ],
    };
  },
  mounted () {
    this.$emit('pageRendered')

    //Initializing scroll Animation
    this.cardAnimation = SlideAnimation
    setTimeout(() => {document.addEventListener("scroll", this.cardAnimation)}, 1000);

  },
  beforeUnmount () {
    document.removeEventListener('scroll', this.cardAnimation)
  },
  beforeMount(){
    scrollTo(0, 0)
  },
};
</script>
<style scoped>

@media (min-width: 900px) {
  .negativeCardMargin {
    margin-top: -8rem;
  }
}

</style>
  

