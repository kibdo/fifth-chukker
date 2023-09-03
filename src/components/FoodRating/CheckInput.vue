<template>
        <input @click="checkHandler" class="button" type="radio" :name="name" id="">
</template>

<script>
    export default {
        props: ['value', 'name'],
        methods: {
            checkHandler() {
                this.$emit('checked', {rating: this.value, ratedArg: this.name})
            }
        },
        
    }
</script>

<style scoped>
.button{
    height: 1.3rem;
    width: 1.3rem;
    background-color: rgb(240, 240, 240)
}

</style>