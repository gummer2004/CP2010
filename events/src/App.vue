<script>
import MyParent from './components/MyParent.vue'
export default{
  components:{
    MyParent,
  },
  data(){
    return{
      parentCount:0,
      childCount:0,
      grandchildCount:0,
    }

  },
  methods:{
    incrementParent(){
      this.parentCount++;
    },
    incrementChild(){
      this.childCount++;
    },
    incrementGrandchild(){
      this.grandchildCount++;
    },
  }

}

</script>

<template>
  <h1>My App</h1>
  <p>Parent clicks {{ parentCount }}</p>
  <p>Child clicks {{  childCount }}</p>
  <p>Grandchild clicks {{ grandchildCount }}</p>
  <MyParent 
    @update-parent-count="incrementParent" 
    @update-child-count="incrementChild"
    @update-grandchild-count="incrementGrandchild"
  />
</template>

<style scoped>

</style>
