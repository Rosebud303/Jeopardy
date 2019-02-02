import Player from './player.js'
import Round from './round-checker.js'

class Game {
  constructor() {
    this.players = [];
    this.round = [];
  }

  createPlayers(name1, name2, name3) {
    const player1 = new Player(name1);
    const player2 = new Player(name2);
    const player3 = new Player(name3);

    if(this.players.length <= 3) {
      this.players.push(player1, player2, player3); 
    }
  }
  createRounds() {
    // const round = new Round(this.categories, this.leftOverCategories);
    // this.round.push(round);
  }

}

export default Game;