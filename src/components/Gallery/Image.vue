<template>
<a :href="getImageSrc" data-gallery="portfolioGallery" class="portfolio-lightbox" :title="title">
    <div class=" overflow-hidden image-wrapper relative">
        <img class="image" :src="getImageSrc" alt="">
        <div ref="info" class="info opac absolute bottom-0 right-0 w-full ">
            <div class="relative ">
                <h3 class="relative text-center p-1 text-gray-100 z-20">{{ title }}</h3>
                <div class="overlay absolute h-full w-full bg-black opacity-75 z-10 bottom-0 right-0"></div>
                
            </div>
        </div>
    </div>
</a>
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                imageSrc: this.data.imageSrc,
                title: this.data.title
            }
        },
        methods: {
           showLightBox(){
               this.$emit('showLightBox', this.data.tempId)
           }
        },
        computed: {
        getImageSrc() {
            return require(`@/assets/images/${this.imageSrc}`)
        }
    },
    }
    
</script>

<style scoped>
.image-wrapper{
    cursor: pointer;
    height: 100%;
    width: 100%;
}
.image-wrapper:hover .info{
    opacity: 1;
    transition: all 0.5s ease;
    animation: slideUp 0.5s ease; 
}
.image-wrapper:hover .image{
    transform: scale(1.1);
}
.image{
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-out;
}
.info{
    opacity: 0;
    transition: opacity 0.5s ease;
    animation: slideDown 0.5s ease;
}

@keyframes slideUp{
0%{
    transform: translateY(100%);
}
100%{
    transform: translateY(0%);
}
}
@keyframes slideDown{
0%{
    transform: translateY(0%);
}
100%{
    transform: translateY(100%);
}
}
</style>