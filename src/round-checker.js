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

 roundCreator() {
  let categoryList = Object.keys(data.categories)
  let categoryTitles = []
  for(var i = 0; i < 4; i++){
    categoryTitles.push(categoryList.pop());
  }
  let currentRound = categoryTitles.reduce((acc, el) => {
    data.clues.forEach((clue) => {
      if(clue.categoryId === data.categories[el] ){
        acc.push(clue);
      }
    })
    return acc;
  }, [])
  return currentRound
}
}

export default RoundChecker;