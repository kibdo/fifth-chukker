<template>
    <div class="wrapper">
        <div class="title-wrapper flex flex-col justify-center items-center">
            <div class="title capitalize text-5xl text-center">Guest Experience</div>
            <div class="underline"></div>
        </div>
        
        <div class="mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-5">
            <div v-for="ratedArg in ratedArgs" :key="ratedArg" class="col-span-1 mt-10 md:mt-3">
                <Section @rated="handleRatingSystem" :ratedArg="ratedArg.ratedArg" :ratings="ratedArg.ratings"/>
            </div>
        </div>
        <div class="mt-10">
            <textarea placeholder="Suggestions" ref="messageBox" class="suggestion-box" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="w-full flex flex md:justify-end">
            <a class="submit-btn capitalize text-center w-full md:w-auto py-3 px-10 bg-gray-800" @click.prevent="handleSubmition">
                submit
            </a>
        </div>
    </div>
</template>

<script>
import Section from '@/components/FoodRating/Section.vue'
    export default {
        props: [],
        components: {
            Section
        },
        methods: {
            handleRatingSystem(argObj) {
                //console.log(`${argObj.ratedArg} ${argObj.rating}`)
                this.ratingsData.push(argObj)
            },
            handleSubmition(){
                const message = this.$refs.messageBox.value
            }
        },
        data() {
            return {
                suggestion: '',
                ratingsData: [],
                ratedArgs: [
                    {
                        ratedArg: 'How would you rate the food?',
                        ratings: ['Poor', 'Average', 'Good', 'Excellent']
                    },
                    {
                        ratedArg: 'How would you rate the Service?',
                        ratings: ['Poor', 'Average', 'Good', 'Excellent']
                    },
                    {
                        ratedArg: 'How would you rate the overall experience?',
                        ratings: ['Poor', 'Average', 'Good', 'Excellent']
                    },
                    {
                        ratedArg: 'Was the menu easy to read and understand?',
                        ratings: ['Yes', 'No']
                    },
                    {
                        ratedArg: 'Would you recommend us to friends and family?',
                        ratings: ['Yes', 'No']
                    },
                ]
            }
        },
    }
</script>

<style scoped>
.suggestion-box{
    width: 100%;
    min-height: 10rem;
    color: rgb(37, 37, 37);
    padding: 1rem;
    background-color: rgb(240, 240, 240)
}
.suggestion-box:focus{
    
}
.submit-btn{
  color: white;
  border: 2px solid #e53e3e;
  background-color: #e53e3e;
  transition: all 0.5s ease;
  margin-top: 1rem;
  cursor: pointer;
}
.submit-btn:hover{
  color: white;
  border: 2px solid #963e3e;
  background-color: #963E3E;
}
.wrapper{
    color: rgb(240, 240, 240);
}
.underline{
    width: 10rem;
    height: 0.2rem;
    background-color: #e53e3e
}
</style>