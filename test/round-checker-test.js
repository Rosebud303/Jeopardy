import chai from 'chai';
import RoundChecker from '../src/round-checker.js';
const expect = chai.expect;

describe('RoundChecker', function() {

  it('should return an array of clues', function() {

  let roundChecker = new RoundChecker();

  let questionList = roundChecker.roundCreator();

  expect(questionList).to.have.length(59)
  })
})