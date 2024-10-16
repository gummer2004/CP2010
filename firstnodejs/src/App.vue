<script>

import BlogPost from './components/BlogPost.vue'

export default{
  components:{
    BlogPost
  },
  data(){
    return{
      posts:[
        {id:1, title:"My Post"},
        {id:2, title:"New Post"},
        {id:3, title:"last Post"},
        {id:4, title:"dynamic Post"},
      ]
    }
  }
}

</script>

<template>
  <div>
    <BlogPost 
      v-for="post in posts"
      :id="post.id"
      :title="post.title"
    />

  </div>
</template>


<style scoped>
section {
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-gap: 1em
}
</style>
