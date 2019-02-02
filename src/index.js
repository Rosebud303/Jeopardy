// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png'
import './domUpdates.js'
import Round from './round-checker.js'
import Game from './game.js'


console.log('This is the JavaScript entry file - your code begins here.');


window.round = new Round();

window.game = new Game();

