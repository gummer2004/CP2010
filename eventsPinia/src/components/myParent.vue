<template>
    <div>
        <h1 @click="increment">Parent {{ clicks }}</h1>
        <MyChild />
        <MyChild />
    </div>
</template>

<script>
    import MyChild from './MyChild.vue';
    import { useClicks } from '@/stores/myclicks';
    export default {
        setup(){
            const myStore = useClicks();
            return { myStore };
        },
        components:{
            MyChild,
        },
        data(){
            return{
                clicks:0,
            }
        },
        methods:{
            increment(){
                this.clicks++;
                this.myStore.incrementParent();
            }
        },
        
    }
</script>

<style scoped>

</style>