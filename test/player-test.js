import chai from 'chai';
import Player from '../src/player.js';
const expect = chai.expect;


describe('Player', function()  {

  it('should have a name', function () {
    let player = new Player()

    expect(player.name).to.equal(player.name)
  });

  it('should default to zero at the start of the game', function() {
    let player = new Player()

    expect(player.score).to.equal(0)
  });

});