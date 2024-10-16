<template>
    <div>
        <h2 @click="increment">The Parent {{ clicks }}</h2>
        <MyChild 
            @update-child-count="incrementChild"
            @update-grandchild-count="incrementGrandchild"
        />
        <MyChild 
            @update-child-count="incrementChild"
            @update-grandchild-count="incrementGrandchild"
        />
    </div>
</template>

<script >
    import MyChild from './MyChild.vue';
    export default {
    components: {
        MyChild,
    },
    data() {
        return {
            clicks: 0,
        }
    },
    methods: {
        increment() {
            this.clicks++;
            this.$emit('update-parent-count');
        },
        incrementChild(){
            this.$emit('update-child-count');
        },
        incrementGrandchild(){
            this.$emit('update-grandchild-count');
        }

        
    }
}
</script>

<style  scoped>

</style>