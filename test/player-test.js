import chai from 'chai';
import Player from '../src/player.js';
const expect = chai.expect;

describe('Player', function()  {
  let player;
  beforeEach(function() {
    player = new Player();
  });

  it('should be an instance of player', function() {

    expect(player).to.be.an.instanceof(Player);
  });

  it('should have default properties', function () {

    expect(player.name).to.equal(player.name);
    expect(player.score).to.equal(0);
  });

//(can nest describe blocks): describe updateScore
//2 it blocks - should increment player score when answer correct and decrement when incorrect
//pass through args that make if statement run for 1st it
//pass in args that make else statement run for 2nd it
//^ way to decouple by passing in minimal info

});