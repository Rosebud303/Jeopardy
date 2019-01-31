import chai from 'chai';
import Clues from '../src/clues.js';
const expect = chai.expect;

describe('Clues', function() {

  it('should have points', function() {
    let clues = new Clues();
    expect(clues.points).to.equal(clues.points);
  });

  it('should have a question inside of it', function() {
    let clues = new Clues();
    expect(clues.question).to.equal(clues.question);
  });

  it('should have an answer', function() {
    let clues = new Clues();
    expect(clues.answer).to.equal(clues.question);
  });

});