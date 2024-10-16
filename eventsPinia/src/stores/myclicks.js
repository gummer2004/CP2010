import { defineStore } from 'pinia'

export const useClicks = defineStore('storeId',{
    state : () =>{
        return {
            parentClicks:0,
            childClicks:0,
            grandchildClicks:0,
            totalClicks:0,
            lastClicked:"",

        }
    },
    actions: {
        incrementParent(){
            this.parentClicks++;
            this.totalClicks++;
            this.lastClicked="Parent";
        },
        incrementChild(){
            this.childClicks++;
            this.totalClicks++;
            this.lastClicked="Child";
        },
        incrementGrandchild(){
            this.grandchildClicks++;
            this.totalClicks++;
            this.lastClicked="Grandchild";
        }
    }
})