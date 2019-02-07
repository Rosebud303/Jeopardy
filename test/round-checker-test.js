import chai from 'chai';
import Round from '../src/round-checker.js';
import Game from '../src/game.js';
import data from '../src//data.js';
import spies from 'chai-spies';
import domUpdates from '../src/domUpdates.js';
chai.use(spies);
const expect = chai.expect;

chai.spy.on(domUpdates, 'displayCategories', () => true);
chai.spy.on(domUpdates, 'displayPointValues', () => true);

describe('Round', function() {
  let round;
  let game;
  beforeEach(function() {
    round = new Round();
    game = new Game();
  });

  it('should be an instance of round', function() {

    expect(round).to.be.an.instanceof(Round);
  });

  it('should have default properties', function() {

    expect(round.roundCategories).to.deep.equal([]);
    expect(round.roundClues).to.deep.equal([]);
    expect(round.finalRound).to.deep.equal([]);
  });

  it('should start game with four random categories per round', function () {
    round.getFourCategoriesPerRound(game);

    expect(round.roundCategories.length).to.equal(4);
  }); 

  it.skip('should display clues on the page', function() {
    const filterClues = [
      [
        {answer: 'tripe', categoryId: 9, pointValue: 400},
        {answer: 'tripe', categoryId: 9, pointValue: 400},
        {answer: 'tripe', categoryId: 9, pointValue: 400},
        {answer: 'tripe', categoryId: 9, pointValue: 400},
        {answer: 'tripe', categoryId: 9, pointValue: 400},
        {answer: 'tripe', categoryId: 9, pointValue: 400},
        {answer: 'tripe', categoryId: 9, pointValue: 400}
      ]
    ];
    const filterCluesFunc = round.filterCluesToDisplayOnDom(filterClues);
    expect(filterCluesFunc).to.equal()
  })
})