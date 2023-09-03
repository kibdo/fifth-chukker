<template>
        <div class="grid-container overflow-hidden grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 mt-1">
            <div v-for="image in getGalleryImages" :key="image.tempId" class="col-span-1">
                <Image @showLightBox="showLightBox" :data="image"/>
            </div>
        </div>
    <div v-if="openLightBox" class="lightbox-wrapper">
        <LightBox :images="getGalleryImages" :currentImageObj="getCurrentImage" @close="closeLightBox"/>
    </div>
</template>

<script>
import Image from "@/components/Gallery/Image.vue";
import LightBox from "@/components/Gallery/LightBox.vue";

import '@/assets/vendor/glightbox/css/glightbox.min.css'
import GLightbox from '@/assets/vendor/glightbox/js/glightbox.min.js'
    export default {
        props: ['galleryImages'],
        components: {
            Image,
            LightBox
        },
        computed: {
            getGalleryImages() {
                let images = [...this.galleryImages]
                images.forEach((value, index) => {value.tempId = index}) 
                return images
            },
            getCurrentImage(){
                return this.getGalleryImages[this.currentImageId]
            }
        },
        beforeMount () {
        },
        mounted () {
            /**
             * Initiate portfolio lightbox 
             */
            const portfolioLightbox = GLightbox({
                selector: '.portfolio-lightbox'
            });
        },
        data() {
            return {
                openLightBox: false,
                currentImageId: 0,               
            }
        },
        methods: {
            closeLightBox() {                
                this.openLightBox = false
            },
            showLightBox(imageId){
                this.currentImageId = imageId
                this.openLightBox = true
            }
        },
    }
</script>

<style scoped>
.grid-container{
    min-height: 100vh;
    width: 100%;
}
.lightbox-wrapper[data-show="false"]{
    display: none;
}
.lightbox-wrapper[data-show="true"]{
    display: block;
}
</style>