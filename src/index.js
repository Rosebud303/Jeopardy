// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

import './css/base.css';
import './images/logo.jpg'

import domUpdates from './domUpdates.js';
import Round from './round-checker.js';
import Game from './game.js';
import $ from 'jquery';
import jQuery from 'jquery';
// import Player from './player.js';


// window.jQuery = $;

let round = new Round();
let game = new Game();
let $cluesCard = $('.number');

$('.start-game').on('click', function() {
  domUpdates.startGame(game, round);
  $('input').hide('slow');
  $('button').hide('slow');
});

$cluesCard.on('click', function(e) {
  domUpdates.displayQuestion(round.roundClues[$cluesCard.index($(event.target))].question)
  // console.log(round.roundClues[$cluesCard.index($(event.target))].answer)
  let clueId = $cluesCard.index($(event.target))
  game.answerSaver(round.roundClues[clueId].answer);
  game.pointSaver(round.roundClues[clueId].pointValue);
  console.log(game.answerIndex);
  console.log(game.pointIndex);
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




