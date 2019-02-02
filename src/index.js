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

window.$startButton = $('.start-game');

window.$playerOneName = $('.player-1-js');
window.$playerTwoName = $('.player-2-js');
window.$playerThreeName = $('.player-3-js');
window.$inputOne = $('.player-1');
window.$inputTwo = $('.player-2');
window.$inputThree = $('.player-3');



console.log('This is the JavaScript entry file - your code begins here.');


window.round = new Round();

window.game = new Game();

$startButton.on('click', function(e) {
  e.preventDefault();
  domUpdates.startGame();
  $('input').hide('slow')
});

