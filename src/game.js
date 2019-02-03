import Player from './player.js';
import Round from './round-checker.js';
import domUpdates from './domUpdates.js';

class Game {
  constructor() {
    this.players = [];
    this.round = [];
    this.turnCounter = 0;
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

  createRounds() {
    const round1 = new Round();
    const round2 = new Round();
    const round3 = new Round();

    if(this.round.length <= 3) {
      this.round.push(round1, round2, round3);
    }
    // const round = new Round(this.categories, this.leftOverCategories);
    // this.round.push(round);
  }

  chooseWinner() {
  // The winner is determined by the player with the highest 
  //total score at the end of all rounds
  let winner = this.players.sort((a, b) => {
    return a.score - b.score;
  }).pop();
  console.log(winner);
}
}

export default Game;