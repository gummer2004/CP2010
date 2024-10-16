<template>
    <div>
        <a @click.prevent="increase" :href="mylink">{{ myval }}</a> - {{ clickcount }}
    </div>
</template>

<script>
export default {
    props: ['myval','mylink'],
    data(){
        return{
            clickcount:0,
        }
    },
    methods:{
        increase(){
            this.clickcount++;
        }
    }

}
</script>

<style scoped>

</style>

