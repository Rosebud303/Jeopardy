import chai from 'chai';
import Player from '../src/player.js';
const expect = chai.expect;

describe('Player', function() {
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

describe('updateScore', function() {
  let player;
  beforeEach(function() {
    player = new Player();
  });

  it('should increment player score when answer is correct', function() {
    expect(player.score).to.equal(0);
    let userAnswer = 'emeril';
    let answerIndex = 'emeril';
    let pointIndex = 100;
    player.updateScore(answerIndex, userAnswer, pointIndex);
    expect(player.score).to.equal(100);
  });

  it('should decrement player score when answer is incorrect', function() {
    expect(player.score).to.equal(0);
    let userAnswer = 'lead';
    let answerIndex = 'emeril';
    let pointIndex = 100;
    player.updateScore(answerIndex, userAnswer, pointIndex);
    expect(player.score).to.equal(-100);
    });
  });
});