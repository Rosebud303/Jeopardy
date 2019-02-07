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
    this.answerIndex;
    this.pointIndex;
  }

  beginGame(round) {
    this.parseData();
    this.createRandomCategories();
    round.getFourCategoriesPerRound(this);
    round.getCluesToPopulate(this);
  }

  answerSaver(is) {
    this.answerIndex = is;
  }

  pointSaver(is) {
    this.pointIndex = is;
  }

  createPlayers(name1, name2, name3) {
    const player1 = new Player(name1);
    const player2 = new Player(name2);
    const player3 = new Player(name3);

    if(this.players.length === 0) {
      this.players.push(player1, player2, player3); 
    }
    domUpdates.displayPlayersName();
    domUpdates.displayPlayerScore(this);
  }

  parseData() {
    let dataVals = Object.values(data);
    dataVals.shift();
    this.categories = Object.keys(dataVals.shift());
    this.clues = dataVals.shift();
  }

  createRandomCategories() {
    for (let i = this.categories.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.categories[i], this.categories[j]] = [this.categories[j], this.categories[i]];  
    }
  }

  playerTurns(round) {
    this.turn++;
      if(this.currentPlayer === this.players[0]) {
        this.currentPlayer = this.players[1]
      } else if (this.currentPlayer === this.players[1]) {
          this.currentPlayer = this.players[2]
      } else {
          this.currentPlayer = this.players[0]
      } 
      if(this.turn >= 16) {
        this.turn = 0;
        this.round++;
        if(this.round === 4) {
          this.chooseWinner();
          domUpdates.displayWinner(this);
          return;
        }
      round.getFourCategoriesPerRound(this);
      round.getCluesToPopulate(this);
      domUpdates.displayRound(this);
      domUpdates.showClue(this);
       
    }
    console.log(this.currentPlayer)

}
  chooseWinner() {
    let winner = this.players.sort((a, b) => {
      return a.score - b.score;
    }).pop();
    return winner.name
  }
}

export default Game;