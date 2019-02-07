import chai from 'chai';
import Player from '../src/player.js';
const expect = chai.expect;

describe('Player', function()  {
  let player;
  beforeEach(function() {
    player = new Player();
  });

  it('should have default properties', function () {

    expect(player.name).to.equal(player.name);
    expect(player.score).to.equal(0);
  });

});