// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

import './css/base.css';
import './images/logo.jpg'

import domUpdates from './domUpdates.js';
import Round from './round-checker.js';
import Game from './game.js';
import $ from 'jquery';
import jQuery from 'jquery';

// window.jQuery = $;

let round = new Round();
let game = new Game();
let $cluesCard = $('.number');

$('.start-game').on('click', function() {
  domUpdates.startGame(game, round);
  $('input').hide('slow');
  $('button').hide('slow');
});

$cluesCard.on('click', function() {
  domUpdates.displayQuestion(round.roundClues[$cluesCard.index($(event.target))].question)
  console.log(round.roundClues[$cluesCard.index($(event.target))].answer)
  domUpdates.disableClue();
});

$('body').on('click', '#submit-button', function (e) {
  e.preventDefault();
  console.log(e)
  findClue(e);
  // console.log('player turn now', game.turn)
  domUpdates.displayAnswer(round.roundClues[0].answer);
  game.playerTurns(round);
});

$('body').on('click', '#confirm', function (e) {
  domUpdates.removeQuestion();
});

function findClue(e){
  console.log('e', e);
  console.log('round', round);
}

