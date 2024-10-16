<template>
    <div>
        <h2 @click="increment">Child {{ clicks }}</h2>
        <MyGrandchild />
        <MyGrandchild />
    </div>
</template>

<script>
    import MyGrandchild from './MyGrandchild.vue';
    import { useClicks } from '@/stores/myclicks';
    export default {
        setup(){
            const myStore = useClicks();
            return { myStore };
        },
        components:{
            MyGrandchild,
        },
        data(){
            return{
                clicks:0,
            }
        },
        methods:{
            increment(){
                this.clicks++;
                this.myStore.incrementChild();
            },
        },
    }
</script>

<style scoped>

</style>