import Player from './player.js';
import data from './data.js';
import Round from './round-checker.js';
import domUpdates from './domUpdates.js';

class Game {
  constructor(player) {
    this.categories = [];
    this.clues = [];
    this.players = [];
    this.round = 1;
    this.turn = 0;
    this.currentPlayer = player;
  }

  beginGame() {
    this.parseData();
    this.createRandomCategories(this);
    round.getFourCategoriesPerRound();
    round.getCluesToPopulate();
  }

  createPlayers(name1, name2, name3) {
    const player1 = new Player(name1);
    const player2 = new Player(name2);
    const player3 = new Player(name3);

    if(this.players.length <= 3) {
      this.players.push(player1, player2, player3); 
    }
    domUpdates.displayPlayersName();
    domUpdates.displayPlayerScore();
  }

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

  playerTurns() {
    this.turn++;
    if(this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1]
    } else if (this.currentPlayer === this.players[1]) {
      this.currentPlayer = this.players[2]
    } else {
      this.currentPlayer = this.players[0]
    } 
    if(this.turn >= 3 && this.turn < 7) {
      this.round++
      round.getFourNewCategories();
    }
    console.log(this.currentPlayer)
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