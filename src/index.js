import './css/base.css';
import './images/logo.jpg'
import domUpdates from './domUpdates.js';
import Round from './round-checker.js';
import Game from './game.js';
import $ from 'jquery';

let round = new Round();
let game = new Game();
let $cluesCard = $('.number');

$('.start-game').on('click', function() {
  domUpdates.startGame(game, round);
  $('input').hide('slow');
  $('.start-game').hide('slow');
  domUpdates.enableReset();
  domUpdates.enableQuit();
});

$cluesCard.on('click', function(e) {
  let clueId = $cluesCard.index($(event.target))
  domUpdates.displayQuestion(round.roundClues[clueId].question)
  game.answerSaver(round.roundClues[clueId].answer);
  console.log(game.answerIndex)
  game.pointSaver(round.roundClues[clueId].pointValue);
  domUpdates.disableClue();
});

$('body').on('click', '#submit-button', function (e) {
  e.preventDefault();
  game.playerTurns(round);
  game.currentPlayer.updateScore(game);
  console.log(game.currentPlayer)
  domUpdates.displayAnswer(game.answerIndex);
  domUpdates.displayPlayerScore(game);
});

$('body').on('click', '#confirm', function (e) {
  domUpdates.removeQuestion();
});

$('.reset-game').on('click', function() {
  domUpdates.disableReset();
});

$('.quit-game').on('click', function() {
  domUpdates.disableQuit();
});