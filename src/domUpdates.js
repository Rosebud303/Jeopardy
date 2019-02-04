import Game from './game.js';
import Round from './round-checker.js';

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

  displayCategories(val) {
    $('.category-js').each((i, category) => {
      $(category).text(val[i])
    });
  },

  displayPointValues(points) {
    $('.clue-js').each((i, point) => {
      $(point).text(points[i].pointValue)
      $(point).attr('id', points[i].question)
    });
  },
  
  startGame() {
    console.log(game)
    game.createPlayers($('.input').eq(0).val(), $('.input').eq(1).val(), $('.input').eq(2).val()); 
    game.beginGame();

  }
}


export default domUpdates;