import Game from './game.js';
import Round from './round-checker.js';

let domUpdates = {

  startGame(game, round) {
    game.createPlayers($('.input').eq(0).val(), $('.input').eq(1).val(), $('.input').eq(2).val()); 
    game.beginGame(round);
  },

  displayPlayersName() {
    $('.player-js').each((i, name) => {
      $(name).text($('.input').eq(i).val());
    });
  },

  disableQuit(){
    $('.quit-game').prop('disabled', true);
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

  disableClue() {
    $('.number').eq($('.number').index($(event.target))).hide('swing');
  },

  displayAnswer(answer) {
    $('.question-card').remove()
    $('.answer-here').remove()
    let newDiv = $(
      `<section>
        <h1>${answer}</h1>
        <form>
          <button id='confirm'>OK</button>
        </form>
      </section>`
    );
    $('.append-question').append(newDiv);
  },

  showClue(game) {
     $('.number').show();
  },

  displayQuestion(question) {
    let div = $(
        `<section class='append-question'>
            <h2 class='question-card'>${question}</h2>
            <form class='answer-here'>
              <input class='answer-id' placeholder='Answer here...'>
              <button id='submit-button'>Submit</button>
            </form>
        </section>`
    );
      $('main').append(div);
  },

  displayWinner(winner) {
    let winnerCard = $(
        `<section class='append-card'>
            <h2 class='winner-card'>${winner} is the winner!</h2>
        </section>`
      )
     $('main').append(winnerCard);
  },

  removeQuestion() {
    $('.append-question').remove();
  }
}

export default domUpdates;