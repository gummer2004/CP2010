<template>
    <div>
    <h2 @click="clickcount++">{{ mytitle }} - {{ clickcount }}</h2> 
    <slot></slot>
    </div>
</template>

<script>
export default {
    props:["mytitle"],
    data(){
        return{
            clickcount:0,
        }
    }
}
</script>

<style scoped>
    h2{
        text-align: center;
        

    }
</style>