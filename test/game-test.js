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

  it('should have an array of players', function() {

    let game = new Game();

    expect(game.players).to.deep.equal([]);
  //can do expect(game.players).to.deep.equal([])
  })

  it('should be able to push players into player array', function() {

    let game = new Game();

    game.createPlayers("Duy", "Sally", "Henry");
    expect(game.players.length).to.deep.equal(3);

  });
}) 