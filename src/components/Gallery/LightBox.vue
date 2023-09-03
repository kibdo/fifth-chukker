<template>

    <div ref="wrapper" class="lightbox-wrapper h-full w-full">
        <div class="overlay"></div>
        <div class="top-tool-bar">
            <a
            @click.prevent="closeHandler"
            class="
            bi bi-x
            close-btn
            icon
            "
            ></a>
        </div>
        <div class="image-wrapper relative z-20">
            <div @click="getNextRightImage" class="icon-wrapper icon-wrapper-right">
                <div class="flex justify-center items-center">
                    <div class="icon-overlay"></div>
                    <a class="icon right-icon bi bi-caret-right direction-icon"></a>
                </div>                
            </div>
            <div @click="getNextLeftImage" class="icon-wrapper icon-wrapper-left">
                <div class="flex justify-center items-center">
                    <div class="icon-overlay"></div>
                    <a class="icon left-icon bi bi-caret-left direction-icon"></a>
                </div>                
            </div>
            <img class="image" :src="getImageSrc" alt="">
            
        </div>
        <div class="text-white relative mt-3 max-w-6xl">
                {{ currentImage.title }}
            </div>
    </div>
</template>

<script>
import '@/assets/vendor/glightbox/css/glightbox.min.css'
import GLightbox from '@/assets/vendor/glightbox/js/glightbox.min.js'

    export default {
        props: ['currentImageObj', 'images'],
        data(){
            return{
                currentImage: this.currentImageObj
            }
        },
        mounted () {
            /**
             * Initiate portfolio lightbox 
             */
            const portfolioLightbox = GLightbox({
                selector: '.portfolio-lightbox'
            });
        },
        computed: {
            getImageSrc() {
                return require(`@/assets/images/${this.currentImage.imageSrc}`)
            }
        },
        methods: {
            closeHandler() {
                this.$refs.wrapper.classList.add('closeAmination')
                setTimeout(()=>this.$emit('close'), 100)
                
            },
            getNextRightImage(){
                if (this.currentImage.tempId < this.images.length -1){
                    this.currentImage = this.images[this.currentImage.tempId + 1 ]
                }else{
                    this.currentImage = this.images[0]
                }
            },
            getNextLeftImage(){
                if (this.currentImage.tempId > 0){
                    this.currentImage = this.images[this.currentImage.tempId - 1 ]
                }else{
                    this.currentImage = this.images[this.images.length -1] 
                }
            }
        },
    }
</script>

<style scoped>

.direction-icon{
    font-size: 2rem;
    color: white;
    position: absolute;
}

.icon-wrapper{
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    top: 0;
    cursor: pointer;
    transition: all 0.5s ease;
}
.icon-wrapper:hover .icon-overlay{
    opacity: 0.8
}
.icon-wrapper-right{
    right: -8rem;
}
.icon-wrapper-left{
    left: -8rem;
}
.image-wrapper:hover .icon-wrapper-right{
    right: 0rem;
}
.image-wrapper:hover .icon-wrapper-left{
    left: 0rem;
}
.icon-wrapper-left{
    left: -8rem;
}
.icon-overlay{
height: 100%;
width: 100%;
background-color: black;
opacity: 0.4;
position: absolute;
top: 0;
right: 0;
transition: all 0.5s ease;
}
.image-wrapper{
    width: 100%;
    max-height: 80%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative
}
.overlay{
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.9;
}
.lightbox-wrapper{
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.top-tool-bar{
    position: absolute;
    width: 100%;
    top: 0;
    right: 0;
}

.image{
    object-fit: cover;
}
.close-btn{
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 1rem;
    margin-right: 1rem;
    color: white;
    font-size: 2rem;
    transition: all 0.5s ease;
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(71, 70, 70);
    z-index: 10000000;
    border-radius: 0.3rem;
}
.close-btn:hover{
    color: white;
    background-color: rgb(36, 35, 35);
}
.icon{
    cursor: pointer;
    transition: all 0.5s ease;
}
@keyframes close {
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(0);
    }
}
@media (min-width: 640px) {
.icon-wrapper{
    width: 4rem;
}
.direction-icon{
    font-size: 3rem;
}
}
@media (min-width: 768px) { 
    .icon-wrapper{
        width: 6rem;
    }
    .direction-icon{
        font-size: 5rem;
    }
 }
 @media (min-width: 1024px) { 
     .icon-wrapper{
        width: 8rem;
    }
  }
</style>