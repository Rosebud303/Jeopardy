import Player from './player.js';
import data from './data.js';
import Round from './round-checker.js';
import domUpdates from './domUpdates.js';

class Game {
  constructor() {
    this.categories = [];
    this.clues = [];
    this.players = [];
    this.round = 0;
    this.turn = 0;
    this.currentPlayer = this.players[this.turn];
  }

  beginGame() {
    this.parseData();
    this.createRandomCategories(this);
    round.getFourCategoriesPerRound();
    round.getCluesToPopulate();
  }

  createPlayers(name1, name2, name3) {
    const player1 = new Player(name1, 76);
    const player2 = new Player(name2, 15);
    const player3 = new Player(name3, 66);

    if(this.players.length <= 3) {
      this.players.push(player1, player2, player3); 
    }
    domUpdates.displayPlayersName();
    domUpdates.displayPlayerScore();
  }

  // createRounds() {
  //   const round1 = new Round();
  //   const round2 = new Round();
  //   const round3 = new Round();
  //   if(this.round.length <= 3) {
  //     this.round.push(round1, round2, round3);
  //   }
  //   // const round = new Round(this.categories, this.leftOverCategories);
  //   // this.round.push(round);
  // }

  createRound() {
    round.getFourCategoriesPerRound();
  }

  parseData() {
    let dataVals = Object.values(data); //grabbing vals of data
    dataVals.shift(); //getting rid of 1st val which we dont need (version, etc)
    this.categories = Object.keys(dataVals.shift()); //grabbing keys and putting them into the array
    this.clues = dataVals.shift(); //shifting all clues 
  }

   createRandomCategories() {
    for (let i = this.categories.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.categories[i], this.categories[j]] = [this.categories[j], this.categories[i]];  
    }
  }
// if it is player turn invoke this add points to certain player only
  playerTurns() {
    this.turn++;
    if(this.turn === this.players.length) {
      this.turn = 0;
    }
    this.currentPlayer = this.players[this.turn];
    //change color of turn? in domUpdates here
  }

  chooseWinner() {
  // The winner is determined by the player with the highest 
  //total score at the end of all rounds
  let winner = this.players.sort((a, b) => {
    return a.score - b.score;
  }).pop();
  console.log(winner.name);
}
}

export default Game;