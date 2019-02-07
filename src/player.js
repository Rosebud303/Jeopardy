import Game from './game.js';
import Round from './round-checker.js';
import $ from 'jquery';


class Player {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
  };
  
  updateScore(game) {
    console.log($('.answer-id').val())
    if(game.answerIndex.toLowerCase() === $('.answer-id').val().toLowerCase()){
      this.score += game.pointIndex;
    } else if (game.answerIndex.toLowerCase() !== $('.answer-id').val().toLowerCase()){
      this.score -= game.pointIndex;
    }
  };
}

export default Player;