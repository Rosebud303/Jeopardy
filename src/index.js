import './css/base.css';
import './images/logo.jpg'
import domUpdates from './domUpdates.js';
import Round from './round-checker.js';
import Game from './game.js';
import $ from 'jquery';
import jQuery from 'jquery';

let round = new Round();
let game = new Game();
let $cluesCard = $('.number');

$('.start-game').on('click', function() {
  domUpdates.startGame(game, round);
  $('input').hide('slow');
  $('.start-game').hide('slow');
  $('.quit-game').prop('disabled', false);
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
  game.saveUserAnswer($('.answer-id').val())
  game.currentPlayer.updateScore(game);
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

