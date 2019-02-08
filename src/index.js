import './css/base.css';
import './images/logo.jpg'
import domUpdates from './domUpdates.js';
import Round from './round-checker.js';
import Game from './game.js';
import $ from 'jquery';
import DD from "./DD.js"
import jQuery from 'jquery';

let round = new Round();
let game = new Game();
let dd;
let $cluesCard = $('.number');

$('.start-game').on('click', function() {
  dd = new DD();
  domUpdates.startGame(game, round);
  $('input').hide('slow');
  $('.start-game').hide('slow');
  $('.quit-game').prop('disabled', false);
  dd.assignDD(round, game)
});

$cluesCard.on('click', function(e) {
  let clueId = $cluesCard.index($(event.target))
  if(round.roundClues[clueId].categoryId === "daily"){
    domUpdates.displayDailyDouble()
  }else{
    domUpdates.displayQuestion(round.roundClues[clueId].question)
    game.answerSaver(round.roundClues[clueId].answer);
    console.log(round.roundClues[clueId].answer)
    game.pointSaver(round.roundClues[clueId].pointValue);
  }
  domUpdates.disableClue();
  game.playerTurns(round);
});

$('body').on('click', '#submit-button', function (e) {
  e.preventDefault();
  game.saveUserAnswer($('.answer-id').val())
  game.currentPlayer.updateScore(game.answerIndex, game.userAnswer, game.pointIndex);
  domUpdates.displayAnswer(game, game.answerIndex, game.pointIndex);
  domUpdates.displayPlayerScore(game);
});

$('body').on('click', '#confirm', function (e) {
  domUpdates.removeQuestion();
});

$('.quit-game').on('click', function() {
  domUpdates.disableQuit();
});

$('.quit-game').on('click', function() {
  location.reload(true);
});


$(window).on("click", function(event){
  if($(event.target).hasClass('submit-wager')){
    dd.setWager($('.wager-input').val(), game)
    dd.checkInput(game, game.answerIndex, game.userAnswer);
  }
})


