import Game from './game.js';
import Round from './round-checker.js';

let domUpdates = {

  startGame(game, round) {
    console.log(game)
    game.createPlayers($('.input').eq(0).val(), $('.input').eq(1).val(), $('.input').eq(2).val()); 
    game.beginGame(round);
  },

  displayPlayersName() {
    $('.player-js').each((i, name) => {
      $(name).text($('.input').eq(i).val());
    });
  },

  disableReset(){
    $('.reset-button').attr('disabled', 'disabled');
},

  disableQuit(){
    $('.quit-button').attr('disabled', 'disabled');
},

//fix these enabled funcs below
enableReset() {
  $('.reset-button').attr('disabled', false);

},

enableQuit() {
  $('.quit-button').attr('disabled', false);

},

  displayRound(game) {
      $('.round-js').text(game.round);
  },

  displayPlayerScore(game) {
    $('.points').each((i, point) => {
      $(point).text(game.players[i].score);
    });
  },

  displayCategories(val) {
    $('.category-js').each((i, category) => {
      $(category).text(val[i])
    });
  },

  displayPointValues(points) {
    $('.number').each((i, point) => {
      $(point).text(points[i].pointValue)
    });
  },

  displayBoard() {
    //needs to be able to reappend cards to page
    //cards that have been used should no longer be there as well

  },

  disableClue() {
    $('.number').eq($('.number').index($(event.target))).hide('swing');
    console.log($('.number').index($(event.target)).answer);
  },

  displayAnswer(answer) {
    $('.question-card').remove()
    $('.answer-here').remove()
    let newDiv = $(
      `<section>
        <h2>${answer}</h2>
        <form>
          <button id='confirm'>OK</button>
        </form>
      </section>`
    );
    $('.append-question').append(newDiv);
    console.log('I made it in here');
  },

  showClue(game) {
     $('.number').show();
  },

  displayQuestion(question) {
    let div = $(
        `<section class='append-question'>
            <h2 class='question-card'>${question}</h2>
            <form class='answer-here'>
              <input id='answer-id' placeholder='Answer here...'>
              <button id='submit-button'>Submit</button>
            </form>
        </section>`
    );
      $('main').append(div);
      console.log(question)
  //on click we want it to hide the value
  //and display the card with the question
  },

  displayWinner(game) {
    let winnerCard = $(
        `<section class='append-card'>
            <h2 class='winner-card'>You are the winner!</h2>
        </section>`
      )
     $('main').append(winnerCard);
  },

  removeQuestion() {
    $('.append-question').remove();
  }
}

export default domUpdates;