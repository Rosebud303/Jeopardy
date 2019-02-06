import data from './data.js';
import Game from './game.js';
import domUpdates from './domUpdates.js';

class Round {
  constructor() {
    this.roundCategories = [];
    this.roundClues = [];
    this.finalRound = [];
  }

  getFourCategoriesPerRound(game) {
    // this.roundCategories = []
    for(var i = 0; i < 4; i++) {
      this.roundCategories.push(game.categories.pop());
    }
    domUpdates.displayCategories(this.roundCategories)
  }

  getCluesToPopulate(game) {
    let filterClues = this.roundCategories.map((category) => {
      return game.clues.reduce((acc, clue) => {
        if(data.categories[category] === clue.categoryId) {
          acc.push(clue)
        }
        return acc;
      }, []);
    })
    filterClues.forEach(clue => {
      for (let i = clue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [clue[i], clue[j]] = [clue[j], clue[i]];  
    }
    })
    this.filterCluesToDisplayOnDom(filterClues); 
  }

  filterCluesToDisplayOnDom(cluesContainer) {
    this.roundClues = cluesContainer.reduce((acc, clue) => {
     for(let i = 1; i < 5; i++) {
      acc.push(clue.find(point => point.pointValue === i * 100))
     }
      return acc
    }, [])
    domUpdates.displayPointValues(this.roundClues);
  }

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