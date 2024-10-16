<script>
import MyParent from './components/MyParent.vue'
import { useClicks } from '@/stores/myclicks'
export default{
  setup(){
    const myStore = useClicks();
    return { myStore };
  },
  components:{
    MyParent,
  },
}
</script>

<template>
  <h1>Total Clicks {{  myStore.totalClicks }}</h1>
  <h1>Last Clicked {{ myStore.lastClicked }}</h1>
  <p>Parent clicks {{ myStore.parentClicks }}</p>
  <p>Child clicks {{ myStore.childClicks }}</p>
  <p>Grandchild clicks {{ myStore.grandchildClicks }}</p>
  <MyParent />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
