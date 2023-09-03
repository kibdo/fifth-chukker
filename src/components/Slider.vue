<template>
      <div class="slides">
          <div data-active = "false" class="slide-wrapper" v-for="slide in slides" :key="slide.imageSrc">
              <div class="slide-details">
                  {{ slide.title }}
                  
              </div>
              <img
                    class="slide-image w-full h-full object-cover"
                    :src="getImageUrl(slide.imageSrc)"
                    alt=""
                />
              
          </div>
      </div>
      
</template>

<script>

export default {
    data(){
        return{
            currentSlideIndex: -1,
            DOMSlideElements: [],
            slides: [
                {
                    imageSrc: 'image-1.jpg',
                    title: 'Image 1'
                },
                {
                    imageSrc: 'image-2.jpg',
                    title: 'Image 2'
                },
                {
                    imageSrc: 'image-3.jpg',
                    title: 'Image 3'
                }
            ]
        }
    },
    methods: {
        
        getImageUrl(imageSrc) {
            return require(`../assets/slider/${imageSrc}`);
        },
        getNextSlide(){
            let nextSlide = null;
            if (this.currentSlideIndex < this.slides.length - 1){
                this.currentSlideIndex++                    
            }else{
                this.currentSlideIndex = 0;
            }
            nextSlide = this.DOMSlideElements[this.currentSlideIndex]
            return nextSlide 
        },
        getPrevSlide(){
            let prevSlide = null;
            if (this.currentSlideIndex > 0){
                this.currentSlideIndex--                    
            }else{
                this.currentSlideIndex = this.DOMSlideElements.length - 1;
            }
            prevSlide = this.DOMSlideElements[this.currentSlideIndex]
            return prevSlide 
        },
        moveToNext(){            
            this.DOMSlideElements[this.currentSlideIndex].setAttribute('data-active', 'false')
            this.getNextSlide().setAttribute('data-active', 'true');
            this.resetInterval()           
        },
        moveToPrev(){
            this.DOMSlideElements[this.currentSlideIndex].setAttribute('data-active', 'false')
            this.getPrevSlide().setAttribute('data-active', 'true');
            this.resetInterval()
        },
        resetInterval(){
            clearInterval(this.autoSlider)
            this.autoSlider = setInterval(this.moveToNext, 5000)
        }
    },
    mounted () {
        let starter = () =>{
            this.DOMSlideElements = document.getElementsByClassName('slide-wrapper');
            this.currentSlideIndex = 0;
            document.getElementsByClassName('slide-wrapper')[this.currentSlideIndex].setAttribute('data-active', 'true');
        
            this.autoSlider = setInterval(this.moveToNext, 5000)
        }
        starter();
        
    },
    
    beforeUnmount () {
        clearInterval(this.autoSlider)
    },
};
</script>

<style  scoped>
.slideLeft{
    animation: slideLeft 1s ease;
}
@keyframes slideLeft {
    0%{
        opacity: 0;
        
    }
    
    100%{
        opacity: 1
    }
}
.slides{
    width: 100%;
    height: 100vh;
}
.slide-wrapper{
    width: 100%;
    height: 100vh;
    position: absolute;
}
.slide-wrapper[data-active="false"]{
    display: none;
    z-index: 20
}
.slide-wrapper[data-active="true"]{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50
}
.slide-details{
    z-index: 20;
    color: white;
}
.slide-image{
    position: absolute;
    
    top: 0
}
</style>
