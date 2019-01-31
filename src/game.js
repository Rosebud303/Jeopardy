class Game {
  constructor(board) {
    this.players = [];
    this.round = 0;
    this.board = board;
  }

  createPlayer(player) {
    this.players.push(player);
  }

}

export default Game;