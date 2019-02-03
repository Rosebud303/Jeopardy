// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';
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
  $('input').hide('slow');
});

