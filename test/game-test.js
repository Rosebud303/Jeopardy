import chai from 'chai';
import Game from '../src/game.js';
import Player from '../src/player.js';
const expect = chai.expect;
const assert = chai.assert;


describe('Game', function() { 

  it('should have an array of players', function() {

    let game = new Game();

    assert.deepEqual(game.players, []);
  })

  it('should be able to push players into player array', function() {

    let game = new Game();

    game.createPlayers("Duy", "Sally", "Henry");
    assert.deepEqual(game.players.length, 3)

  });
}) 