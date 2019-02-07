import Game from './game.js';
import Player from './player.js';
import data from './data.js';
import Round from './round-checker.js';
import domUpdates from './domUpdates.js';

class DD extends Game {
  constructor(categories, clues, players) {
    super(categories, clues, players);
  }

  pickClueAtRandom() {

  }

makeWager() {
  //have that wager ++ or  - - current player score
  //check wager against player score to not allow them to bet over
  //then do domUpdates
  }
}


