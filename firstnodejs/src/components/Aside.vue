<template>
    <div>
    <Item myval="Google" mylink="https://google.ca"></Item>
    <Item myval="CNA" mylink="https://cna.nl.ca"></Item>
    <Item myval="Facebook" mylink="https:facebook.ca"></Item>
    </div>
</template>

<script setup>
import Item from './Item.vue'

</script>

<style scoped>
    div{
        background-color: beige;
    }
</style>