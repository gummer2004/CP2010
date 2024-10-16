<template>
    <div>
        <button @click="playBlackJack">BlackJack</button>
        <button @click="playHoldem">Holdem</button>
        <div v-if="isBlackjack()">
            <BlackJack />
        </div>
        <div v-if="isHoldem()">
            <HoldEm />
        </div>
    </div>
</template>

<script>
    import BlackJack from './BlackJack.vue';
    import HoldEm from './HoldEm.vue';
    export default {
        components:{
            BlackJack,
            HoldEm,
        },
        data(){
            return{
                game:"",
            }
        },
        methods:{
            playBlackJack(){
                this.game="blackjack";
            },
            playHoldem(){
                this.game="holdem";
            },
            isBlackjack(){
                console.log (this.game);
                return this.game=="blackjack";
            },
            isHoldem(){
                return this.game=="holdem";
            }
        }
    }
</script>

<style scoped>

</style>