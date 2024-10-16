<template>
    <div class="card" 
        :class="{flipped: faceDown}, colorcard"
        @click="flip"
        >
        <div class="front">
        {{ rank }}{{ suit }}
        </div>
        <div class="back">
            
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "rank",
        "suit",
        "colorcard",
    ],
    data() {
        return{
            faceDown: false,
        }
    },
    methods:{
        flip(){
            this.faceDown=!this.faceDown;
        }
    }
}
</script>

<style scoped>
div.card {
    width: 8rem;
    height: 12rem;

    border-color: black;
    border-width: 2px;
    border-style: solid;
    border-radius: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;

}


.red {
    color: red;
}

.black {
    color: black;
}

.green {
    color: green;
}

.blue {
    color: blue;
}
.card{
    transition: transform 1s;
    transform-style: preserve-3d
}
.back, .front{
    position:absolute;
    backface-visibility: hidden;
}
.back{

    color: black;
    transform: rotateY(180deg);
    transition: transform 0.5s;
    height:100%;
    width:100%;
    overflow: hidden;
    background-image: url('../assets/card-back.svg');
    background-size: 100%;
}


.flipped {
    
    transform: rotateY(180deg);
    transition: transform 0.5s;
}

</style>