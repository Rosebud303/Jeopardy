import Player from './player.js'
import Round from './round-checker.js'

class Game {
  constructor() {
    this.players = [];
    this.round = [];
    this.turnCounter = 0;
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
    const round1 = new Round();
    const round2 = new Round();
    const round3 = new Round();

    if(this.round.length <= 3) {
      this.round.push(round1, round2, round3)
    }
    // const round = new Round(this.categories, this.leftOverCategories);
    // this.round.push(round);
  }

  chooseWinner() {
  // The winner is determined by the player with the highest 
  //total score at the end of all rounds
  if(game.players[0].score > game.players[1].score && 
    game.players[0].score > game.players[2].score) {
    console.log('player 1 is winner')
  } else if (game.players[1].score > game.players[2].score && 
    game.players[1].score > game.players[0].score) {  
    console.log('Player 2 is the winner')  
  } else {
    console.log('player 3 is winner')
  }
  //Look at Math.max method to refactor this above
}
}

export default Game;