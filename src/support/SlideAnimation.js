let SlideAnimation = () =>{
  let animatedElements = document.getElementsByClassName('animated');
  
  for(let i =0; i < animatedElements.length; i++){
      const animatedElement = animatedElements[i];
      if (animatedElement.getBoundingClientRect().top <= 600){
          const animationClass = animatedElement.getAttribute('data-animation-class')
          const smallScreenDelay = animatedElement.getAttribute('data-animation-delay-small-screen') ? true : false
          let animationDelay = animatedElement.getAttribute('data-animation-delay') && ((window.innerWidth > 768) || smallScreenDelay) ? parseFloat(animatedElement.getAttribute('data-animation-delay')) : 0;
          animationDelay = animationDelay * 1000
          setTimeout(() => {animatedElement.classList.add(animationClass)}, animationDelay);
      }
  }
}
 export default SlideAnimation;