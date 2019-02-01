import data from './data.js'

class RoundChecker {
  constructor() {
    this.categories;
    this.roundInfo = []; 
  }
  createCategories() {
   this.categories = Object.keys(data.categories)
   for (let i = this.categories.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1));
       [this.categories[i], this.categories[j]] = [this.categories[j], this.categories[i]];  
    }

  }

}

export default RoundChecker;