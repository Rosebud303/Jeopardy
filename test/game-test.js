import chai from 'chai';
import Game from '../src/game.js';
import Player from '../src/player.js';
import spies from 'chai-spies';
import domUpdates from '../src/domUpdates.js';
chai.use(spies);
const expect = chai.expect;


chai.spy.on(domUpdates, 'displayPlayersName', () => true);
chai.spy.on(domUpdates, 'displayPlayerScore', () => true);


describe('Game', function() { 
  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('should have default properties', function() {

    // let game = new Game();

    expect(game.players).to.deep.equal([]);
    expect(game.clues).to.deep.equal([]);
    expect(game.categories).to.deep.equal([]);
    expect(game.round).to.deep.equal([]);
    expect(game.turn).to.equal(0);
    expect(game.currentPlayer).to.equal(game.players[game.turn])
  })

  it('should be able to push players into player array', function() {

    // let game = new Game();

    game.createPlayers("Duy", "Sally", "Henry");
    expect(game.players.length).to.deep.equal(3);

  });

  it('should be an instance of game', function() {

    // let game = new Game();

    expect(game).to.be.an.instanceof(Game);
  });
}) 