import Game from './game.js';
import Round from './round-checker.js';
import $ from 'jquery';


class Player {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
  }
  
  updateScore(answerIndex, userAnswer, pointIndex) {
    if(answerIndex === userAnswer) {
      this.score += pointIndex;
    } else if (answerIndex !== userAnswer){
      this.score -= pointIndex;
    }
  }
}

export default Player;