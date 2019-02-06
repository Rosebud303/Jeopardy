import chai from 'chai';
import Clues from '../src/clues.js';
const expect = chai.expect;

describe('Clues', function() {

    let clues;
    beforeEach(function() {
      clues = new Clues();
  });

  it('should have default properties', function() {
    expect(clues.points).to.equal(clues.points);
    expect(clues.question).to.equal(clues.question);
    expect(clues.answer).to.equal(clues.question);
  });

});