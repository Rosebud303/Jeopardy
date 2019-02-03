import data from './data.js';
import Game from './game.js';
import domUpdates from './domUpdates.js';

class Round {
  constructor() {
    this.roundCategories = [];
    this.roundClues = [];
    this.finalRound = [];
    // this.leftOverCategories = [];
    // this.createRandomCategories();
  }

  getFourCategoriesPerRound() {
    //this is to get 4 categories per round to get
    //our clues - each time it also changes because of
    //the randomizer inside of game
    //Everytime we start a new round, we want to invoke
    //this function to create 4 more new cats
    for(var i = 0; i < 4; i++) {
      this.roundCategories.push(game.categories.pop());
    }
    domUpdates.displayCategories(this.roundCategories)
  }

  getCluesToPopulate() {
    //reinvoke this to create new clues each round
    //this filters out the right clues for the category for each round
    let filterClues = this.roundCategories.map((category) => {
      return game.clues.reduce((acc, clue) => {
        if(data.categories[category] === clue.categoryId) {
          acc.push(clue)
        }
        return acc;
      }, [])
    })
    //this randomizes the categories clues below
    filterClues.forEach(clue => {
      for (let i = clue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clue[i], clue[j]] = [clue[j], clue[i]];  
    }
    })
    console.log(filterClues)
  }

  //create another function here that grabs one clue value at a time
  //ie $100, $200, etc. maybe do another map with a filter inside of it
  //filter out the first 100, then 1st 200, etc.

  cluesCreator(clues) {
    let currentClues = clues.reduce((acc, el) => {
    data.clues.forEach((clue) => {
      if(clue.categoryId === data.categories[el]){
        acc.push(clue);
      }
    });
      return acc;
    },[]);
    return currentClues;
  }

}

export default Round;