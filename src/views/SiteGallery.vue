<template>
    <div class="min-h-screen w-full">
        <div class="">
            <LandingJumbotron :dataObj="headerDataObj" />
        </div>
        <div class="min-h-screen w-full">
            <ImageGallery :galleryImages="galleryImages" />
        </div>
    </div>
</template>

<script>
import LandingJumbotron from "@/components/LandingJumbotron.vue";
import ImageGallery from "@/components/ImageGallery.vue";
export default {
        components: {
            LandingJumbotron,
            ImageGallery,
        },
        computed: {
            
        },
       beforeMount(){
            scrollTo(0, 0)
        },
        data() {
            return {
                headerDataObj: {
                    imageSrc: "event-5.jpg",
                    title: "Gallery",
                    description: "Our Gallery",
                },
                galleryImages: [
                    {
                        title: 'Polo Event 2021 ',
                        imageSrc: 'polo-1.jpg'
                    },
                    {
                        title: 'Charity Shield',
                        imageSrc: 'polo-2.jpg'
                    },
                    {
                        title: 'Access Diamond Tournament',
                        imageSrc: 'polo-4.jpg'
                    },
                    {
                        title: 'Slacks of the Year 2021',
                        imageSrc: 'polo-3.jpg'
                    }
                ]
            }
        },
        methods: {
            
        },
    }
</script>

<style scoped>

</style>