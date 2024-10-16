<template>
    <div>
        <h3 @click="increment">My Child {{ clicks }}</h3>
        <MyGrandchild @update-grandchild-count="incrementGrandchild"/>
        <MyGrandchild @update-grandchild-count="incrementGrandchild"/>
    </div>
</template>

<script>
import MyGrandchild from './MyGrandchild.vue';
export default {
    components: {
        MyGrandchild,
    },
    data() {
        return {
            clicks: 0,
        }
    },
    methods: {
        increment() {
            this.clicks++;
            this.$emit('update-child-count');
        },
        incrementGrandchild(){
            this.$emit('update-grandchild-count');
        }
    }
}
</script>

<style></style>