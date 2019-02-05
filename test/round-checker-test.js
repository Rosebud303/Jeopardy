import chai from 'chai';
import Round from '../src/round-checker.js';
import Game from '../src/game.js';
// import data from '../src//data.js';
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

  it('should have default properties', function() {

    expect(round.roundCategories).to.deep.equal([]);
    expect(round.roundClues).to.deep.equal([]);
    expect(round.finalRound).to.deep.equal([]);
  });

  // it('should return an array of clues', function() {

  // let round = new Round();

  // let questionList = round.roundCreator();

  // expect(questionList).to.have.length()
  // });

  it('should return back random categories', function () {

    round.getFourCategoriesPerRound();

    expect(round.roundCategories).to.have.length(4);
    expect(round.finalRound).to.have.length(4);
  }); 
})