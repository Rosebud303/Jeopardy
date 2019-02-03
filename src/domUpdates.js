import Game from './game.js';

let domUpdates = {

  displayPlayersName() {
    $('.player-js').each((i, name) => {
      $(name).text($('.input').eq(i).val());
    });
  },

  displayPlayerScore() {
    $('.points').each((i, point) => {
      $(point).text(game.players[i].score);
    });
  },
  
  startGame() {
    console.log(game)
    game.createPlayers($('.input').eq(0).val(), $('.input').eq(1).val(), $('.input').eq(2).val());  
  }
}


export default domUpdates;