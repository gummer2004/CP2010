import { defineStore } from 'pinia'

export const useDeckStore = defineStore('deck', {
    // store info goes here
    state: () => {
        return {
            cards: [],
        }
    },
    getters: {

    },
    actions: {
        push(card) {
            this.cards.push(card);
            console.log(this.cards.length);
        },
        shift() {
            return this.card.shift();
        },
        shuffle(){
            console.log(this.cards.length);
            for (let i = 0; i < this.cards.length; i++) {
                let card = [];
                let lastindex = this.cards.length - i;
                let cardindex = Math.floor(Math.random(1) * this.cards.length);
                [this.cards[lastindex - 1], this.cards[cardindex]] = [this.cards[cardindex], this.cards[lastindex - 1]];
                this.isShuffled = true;
            }
        },
        newgame(){
            this.shuffle();
        }
    }
})