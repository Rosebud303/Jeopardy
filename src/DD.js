import Round from './round-checker.js';
import Game from './game.js';
import domUpdates from "./domUpdates.js"

class DD extends Round {
  constructor(){
    super()
    this.playerWage;
  }
  assignDD(round, game) {
    for(var i = 0; i < game.round; i++){
      let dailyDouble = Math.floor(Math.random()* 16)
      round.roundClues[dailyDouble].categoryId = "daily"
      console.log(round.roundClues[dailyDouble])
    }
  }

  setWager(value, game) {
    if(game.currentPlayer.score >= value) {
      this.playerWage = value;
      domUpdates.displayCard();
    }else{
      domUpdates.wageError();
    }
  }

  checkInput(clueAnswer, userAnswer){
    if(clueAnswer === userAnswer) {
      game.currentPlayer.score += this.playerWage;
    } else if (answerIndex !== userAnswer){
      game.currentPlayer.score -= this.playerWage;
    }
  }

}

export default DD;

