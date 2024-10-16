<template>
    <div>
        <h3 @click="increment">Grandchild {{  clicks }}</h3>
    </div>
</template>

<script>
    import { useClicks } from '@/stores/myclicks';
    export default {
        setup(){
            const myStore = useClicks();
            return { myStore }
        },
        data(){
            return{
                clicks:0,
            }
        },
        methods:{
            increment(){
                this.clicks++;
                this.myStore.incrementGrandchild();
            },
        },
    }
</script>

<style scoped>

</style>