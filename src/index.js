// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

import './css/base.css';
import './images/logo.jpg'

import domUpdates from './domUpdates.js';
import Round from './round-checker.js';
import Game from './game.js';
import $ from 'jquery';
import jQuery from 'jquery';

window.jQuery = $;

window.round = new Round();

window.game = new Game();

let $cluesCard = $('.clue-js');
// let cardId = round.roundClues[$cluesCard.index($(event.target))];

$('.start-game').on('click', function() {
  domUpdates.startGame();
  $('input').hide('slow');
  $('button').hide('slow');
  // game.playerTurns();
});

$cluesCard.on('click', function() {
  domUpdates.displayQuestion(round.roundClues[$cluesCard.index($(event.target))].question)
  // $cluesCard.index($(event.target)).text('').css('background-color', 'black')
  // domUpdates.clearBoard();
});

$('body').on('click', '#submit-button', function (e, round) {
  e.preventDefault();
  findClue(e);
  console.log('player turn now', game.turn)
  domUpdates.removeQuestion();
  // domUpdates.disableClue();
  game.playerTurns();
  // console.log(round.roundClues[$cluesCard.index($(event.target))]);
})


function findClue(e){
  console.log('e', e);
  console.log('round', round);
}

