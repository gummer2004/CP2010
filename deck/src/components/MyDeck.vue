<template>
    <header>
        <!-- <button @click="builddeck" v-if="!isBuilt">Build Deck</button>
        <button @click="shuffle" v-if="isBuilt">Shuffle</button> -->

    </header>
    <section>

        <h2>The Deck</h2>
        <div>
            <MyCard v-for="card in deckStore.cards" :rank="card.rank" :suit="card.suit" :colorcard="card.colorcard" />
        </div>
    </section>
</template>

<script>
import MyCard from './MyCard.vue';
import { useDeckStore } from '@/stores/deckStore';
export default {
    setup() {
        const deckStore = useDeckStore();
        return { deckStore };
    },
    components: {
        MyCard,
    },
    data() {
        return {
            // cards: [],
            // player1: [],
            // player2: [],
            // score1: 0,
            // score2: 0,
            // currentPlayer: 1,
            isBuilt: false,
            isShuffled: false,
        }
    },
    mounted(){
        this.builddeck();
        this.shuffle();
    },
    methods: {
        builddeck() {
            //this.cards = [];
            const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
            const suits = ["♥", "♦", "♣", "♠"];
            for (const suit of suits) {
                for (const rank of ranks) {
                    let mycolor = "";
                    if (suit == "♥") {
                        mycolor = "red";
                    } else if (suit == "♦") {
                        mycolor = "green";
                    } else if (suit == "♣") {
                        mycolor = "blue";
                    } else {
                        mycolor = "black";
                    }
                    let value;
                    switch (rank) {
                        case "A": 
                            value=14;
                            break;
                        case "K":
                            value=13;
                            break;
                        case "Q":
                            value=12;
                            break;
                        case "J":
                            value=11;
                            break;
                        default:
                            value= parseInt(rank);

                    }
                    this.deckStore.push({ "rank": rank, "suit": suit, "colorcard": mycolor, "value": value });
                }
            }
            this.isBuilt = true;
        },
        shuffle() {
            this.deckStore.shuffle();

        },


        newgame() {
            this.player1 = [];
            this.player2 = [];
            this.score1 = 0,
                this.score2 = 0,
                this.builddeck();
            this.isShuffled = false;
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