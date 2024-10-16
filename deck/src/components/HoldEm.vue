<template>
    <section>
        <h1>Holdem</h1>
        <button @click="newgame">New Game</button>
        <button @click="deal" v-if="!dealt">Deal</button>
        <button @click="flop" v-if="showflopbutton()">Flop</button>
        <button @click="turn" v-if="showturnbutton()">Turn</button>
        <button @click="river" v-if="showriverbutton()">River</button>
        
        <h2>Player 1 - Score {{ score1 }}</h2>
        <div>
            <MyCard v-for="card in player1" :rank="card.rank" :suit="card.suit" :colorcard="card.colorcard" />
        </div>
        <h2>Community</h2>
        <div>
            <MyCard v-for="card in community" :rank="card.rank" :suit="card.suit" :colorcard="card.colorcard" />
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
            score1: "",
            player2: [],
            score2: "",
            community: [],
            currentPlayer: 1,
            dealt: false,
            flopped: false,
            turned: false,
            rivered: false,

        }
    },
    methods: {

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
        flop(){
            this.community.push(this.deckStore.cards.shift());
            this.community.push(this.deckStore.cards.shift());
            this.community.push(this.deckStore.cards.shift());
            this.score1 = this.score(this.player1);
            this.score2 = this.score(this.player2);
            this.flopped=true;
        },
        turn(){
            this.community.push(this.deckStore.cards.shift());
            this.score1 = this.score(this.player1);
            this.score2 = this.score(this.player2);
            this.turned=true;
        },
        river(){
            this.community.push(this.deckStore.cards.shift());
            this.score1 = this.score(this.player1);
            this.score2 = this.score(this.player2);
            this.rivered=true;
        },
        score(playercards){
            console.log (JSON.stringify(playercards));
           let playerscore="";
            let hand = [...playercards,...this.community];
            // sort my hand
            hand.sort((a,b) => a.value > b.value ? 1 : -1);
            playerscore = JSON.stringify({"flush":this.isFlush(hand)});
            playerscore += JSON.stringify({"Straight":this.isStraight(hand)});
            playerscore += JSON.stringify(this.countPairsPlus(hand));
            console.log(hand);
            return playerscore;
        },
        isStraight(cards){
            let straight = false;
            let done = false;
            let index = 0;
            let count = 1;
            let length = cards.length-1;
            while (!done){
                if (cards[index].value == cards[index+1].value-1){
                    count++;
                }else if (cards[index].value != cards[index+1].value){
                    count=1;
                }
                index++;
                if (index>=length || count>4){
                    done=true;
                }
            }
            if (count>4){
                straight=true;
            }
            return straight;
        },
        countPairsPlus(cards){
            
            let pairs = 0;
            let trips = 0;
            let quads = 0;
            let fullhouse =false;
            let done = false;
            let index = 0;
            let length = cards.length-1;
            while(!done){
                if (cards[index].rank == cards[index +1].rank){
                    if ((index + 2< length ) && (cards[index].rank == cards[index +2].rank)){
                        if ((index + 3< length ) && (cards[index].rank == cards[index +3].rank)){
                            quads++;
                            index+=3;
                        }else{
                            trips++;
                            index+=2;
                        }
                    }else{
                        pairs++;
                        index++;
                    }
                }
                index++;
                if (index>=length){
                    done=true;
                }
            }
            if (trips>0 && (pairs>0 || trips>1)){
                fullhouse=true;
            }

            return {"pairs":pairs,"trips":trips,"quads":quads, "fullhouse":fullhouse};

        },
        isFlush(cards){
            let clubs=0;
            let hearts=0;
            let spades =0;
            let diamonds = 0;
            for (const card of cards){
                if (card.suit=="♣"){
                    clubs++;
                }
                if (card.suit=="♦"){
                    diamonds++;
                }
                if (card.suit=="♥"){
                    hearts++;
                }
                if (card.suit=="♠"){
                    spades++;
                }
            }
            if (hearts>4 || spades>4 || clubs>4 || diamonds>4){
                return true;
            }else{
                return false;
            }
        },
        showflopbutton(){
            return this.dealt && !this.flopped;
        },
        showriverbutton(){
            return this.turned && !this.rivered;
        },
        showturnbutton(){
            return this.flopped && !this.turned;

        },
        newgame(){
            for (let card of this.player1){
                
                this.deckStore.push(card);
            }
            for (let card of this.player2){
                this.deckStore.push(card);
            }
            for (let card of this.community){
                this.deckStore.push(card);
            }
            this.player1=[];
            this.player2=[];
            this.community=[];
            this.score1="";
            this.score2="";
            this.deckStore.shuffle();
            this.dealt=false;
            this.flopped=false;
            this.turned=false;
            this.rivered=false;
            
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