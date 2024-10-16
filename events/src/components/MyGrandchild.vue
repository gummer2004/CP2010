<template>
    <div>
        <p @click="increment">The Grand Child {{ clicks }}</p>
    </div>
</template>

<script>
export default{
    data(){
        return{
            clicks:0,
        }
    },
    methods:{
        increment(){
            this.clicks++;
            this.$emit('update-grandchild-count');
        }
    }
}

</script>

<style  scoped>

</style>