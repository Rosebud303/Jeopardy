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
// window.$ = $;

// console.log('This is the JavaScript entry file - your code begins here.');


window.round = new Round();

window.game = new Game();

$('.start-game').on('click', function(e) {
  e.preventDefault();
  domUpdates.startGame();
  game.beginGame();
  $('input').hide('slow');
  $('button').hide('slow');
  //maybe get this above to toggle to say 'quit game' instead
});

