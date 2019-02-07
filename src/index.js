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
  $('.start-game').hide('slow');
  domUpdates.enableReset();
  domUpdates.enableQuit();
});

$cluesCard.on('click', function() {
  domUpdates.displayQuestion(round.roundClues[$cluesCard.index($(event.target))].question)
  domUpdates.disableClue();
});

$('body').on('click', '#submit-button', function (e) {
  e.preventDefault();
  findClue(e);
  console.log('player turn now', game.turn)
  domUpdates.removeQuestion();
  game.playerTurns(round);
});

// $(window).load(() => {
//     $('.reset-button').prop('disabled', 'disabled');
//     $('.quit-button').attr('disabled', 'disabled');
// })

$('.reset-game').on('click', function() {
  domUpdates.disableReset();
});

$('.quit-game').on('click', function() {
  domUpdates.disableQuit();
});

function findClue(e){
  console.log('e', e);
  console.log('round', round);
}

