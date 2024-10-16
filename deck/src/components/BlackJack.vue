<template>
    <section>
        <h1>Blackjack</h1>
        <button @click="newgame">New Game</button>
        <!-- <button @click="draw">Draw</button> -->
        <button @click="deal" v-if="!dealt">Deal</button>
        <button @click="hit" v-if="dealt">Hit</button>
        <button @click="stand" v-if="dealt">Stand</button>
        
        <h2>Player 1 - Score {{ score1 }}</h2>
        <div>
            <MyCard v-for="card in player1" :rank="card.rank" :suit="card.suit" :colorcard="card.colorcard" />
        </div>

        <h2>Player 2 - Score {{ score2 }}</h2>
        <div>
            <MyCard v-for="card in player2" :rank="card.rank" :suit="card.suit" :colorcard="card.colorcard" />
        </div>
        <MyDeck />
    </section>
</template>

<script>
import MyDeck from './MyDeck.vue';
import MyCard from './MyCard.vue';
import { useDeckStore } from '@/stores/deckStore';

export default {
    setup() {
        const deckStore = useDeckStore();
        return { deckStore };
    },
    components: {
        MyDeck,
        MyCard,
    },
    data() {
        return {
            player1: [],
            score1: 0,
            player2: [],
            score2: 0,
            currentPlayer: 1,
            dealt: false,

        }
    },
    methods: {
        draw() {
            let card = this.deckStore.cards.shift();
            if (this.currentPlayer == 1) {
                this.player1.push(card);
                this.currentPlayer = 2;
                this.score1 = this.score(this.player1);
            } else {
                this.player2.push(card);
                this.currentPlayer = 1;
                this.score2 = this.score(this.player2);
            }
        },
        deal(){
            console.log ("Deal");
            this.player1.push(this.deckStore.cards.shift());
            this.player2.push(this.deckStore.cards.shift());
            this.player1.push(this.deckStore.cards.shift());
            this.player2.push(this.deckStore.cards.shift());
            this.score1 = this.score(this.player1);
            this.score2 = this.score(this.player2);
            this.currentPlayer = 1;
            this.dealt=true;
        },
        hit(){
            let card = this.deckStore.cards.shift();
            if (this.currentPlayer == 1) {
                this.player1.push(card);
                this.score1 = this.score(this.player1);
                if (this.score1>21){
                    alert ("Busted");
                    this.currentPlayer=2;
                }

            } else {
                this.player2.push(card);
                this.score2 = this.score(this.player2);
                if (this.score2>21){
                    alert ("Busted");
                }
            }
        },
        stand(){
            if (this.currentPlayer==1){
                this.currentPlayer=2;
            }else{
                alert ("Game Over!");
                if (this.score1>21){
                    alert("Player 2 Wins");
                }else if (this.score1<this.score2 && this.score2<=21){
                        alert ("Player 2 Wins");
                }else if (this.score1==this.score2){
                    alert("Its a Tie!")
                }else{
                    alert ("Player 1 Wins");
                }
            }
        },
        score(playercards){
            console.log (JSON.stringify(playercards));
            let playerscore = 0;
            for(let card of playercards){
                if (card.rank=="A"){
                    playerscore += 11;
                }else if (card.rank =="J" || card.rank=="Q" || card.rank=='K'){
                    playerscore +=10
                }else{
                    playerscore += parseInt(card.rank);
                }
            }
            return playerscore;
        },
        newgame(){
            for (let card of this.player1){
                
                this.deckStore.push(card);
            }
            for (let card of this.player2){
                this.deckStore.push(card);
            }
            this.player1=[];
            this.player2=[];
            this.score1=0;
            this.score2=0;
            this.deckStore.shuffle();
            this.dealt=false;
            
        },
    },

}
</script>

<style scoped>

div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
}
</style>