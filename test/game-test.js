import chai from 'chai';
import Game from '../src/game.js';
// import Round from './round-checker.js';
import Player from '../src/player.js';
import spies from 'chai-spies';
import domUpdates from '../src/domUpdates.js';
chai.use(spies);
const expect = chai.expect;


chai.spy.on(domUpdates, 'displayPlayersName', () => true);
chai.spy.on(domUpdates, 'displayPlayerScore', () => true);


describe('Game', function() { 
  let game;
  let round;
  beforeEach(function() {
    game = new Game();
    // round = new Round();
  });

  it('should have default properties', function() {

    expect(game.players).to.deep.equal([]);
    expect(game.clues).to.deep.equal([]);
    expect(game.categories).to.deep.equal([]);
    expect(game.round).to.equal(0);
    expect(game.turn).to.equal(0);
    expect(game.currentPlayer).to.equal(game.players[game.turn]);
  });

  it('should be able to push players into player array', function() {

    game.createPlayers("Duy", "Sally", "Henry");
    expect(game.players.length).to.deep.equal(3);

  });

  it('should be an instance of game', function() {

    expect(game).to.be.an.instanceof(Game);
  });

  it('should increment turns for each player', function() {

    expect(game.turn).to.equal(0);

    game.playerTurns();

    expect(game.turn).to.equal(1);

  });
});