 import chai from 'chai';
// import Round from '../src/round-checker.js';
const expect = chai.expect;

describe('Round', function() {

  // it('should return an array of clues', function() {

  // let round = new Round();

  // let questionList = round.roundCreator();

  // expect(questionList).to.have.length()
  // });

  it('should give me back random categories', function () {
    let round = new Round();

    expect(round.categories).to.have.length(4);
    expect(round.leftOverCategories).to.have.length(4);
  }); 
})