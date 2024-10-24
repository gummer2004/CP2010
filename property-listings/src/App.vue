<script>
import PropertyCard from './components/PropertyCard.vue';

export default{
  components:{
    PropertyCard
  },
  data: () => ({
    property1: {
      imageURL: '/images/toronto.jpg',
      imageAlt:"TO Skyline",
      isTrue: false,
      beds: 3,
      baths:2,
      title:"Modern home in center city",
      priceInCents: 140000,
      formatedPrice:"$1,400",
      reviewCount: 34,
      rating: 4,
    },
    property2: {
      imageURL: '/images/miami.jpg',
      imageAlt:"TO Skyline",
      isNew: true,
      beds: 3,
      baths:2,
      title:"Modern home in center city",
      priceInCents: 140000,
      formatedPrice:"$1,400",
      reviewCount: 12,
      rating: 3,
    },
  })
  
}
</script>

<template>
  <div class="flex">
    <PropertyCard :property="property1" />
    <PropertyCard :property="property2" />
 
  </div>
 
</template>


