import data from './data.js'

class Round {
  constructor() {
    this.categories = [];
    this.leftOverCategories = [];
    this.finalRound = [];
    this.createRandomCategories();
  }

  createRandomCategories() {
    let shuffledCategories = Object.keys(data.categories)
    for (let i = shuffledCategories.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCategories[i], shuffledCategories[j]] = [shuffledCategories[j], shuffledCategories[i]];  
    }
    for(var i = 0; i < 4; i++){
      this.categories.push(shuffledCategories.pop());
    }
    this.leftOverCategories = shuffledCategories;
    for(var i = 0; i < 2; i++){
        this.leftOverCategories.pop();
    }
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