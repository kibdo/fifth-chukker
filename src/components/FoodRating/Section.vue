<template>
    <div>
        <div class="font-semibold text-xl md:text-2xl mb-2">{{ ratedArg }}</div>
        <div v-for="rating in ratings" :key="rating" class="flex px-5 justify-between items-centr">
            <span class="">
                {{ rating }}
            </span>
            <span>
                <CheckInput @checked="btnChecked" :name="ratedArg" :value="rating"/>
            </span>
        </div>
    </div>
</template>

<script>
import CheckInput from '@/components/FoodRating/CheckInput.vue'
    export default {
        props: ['ratedArg', 'ratings'],
        components: {
            CheckInput,
        },
        methods: {
            btnChecked(argObj) {
                this.$emit('rated', argObj)
            }
        },
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>