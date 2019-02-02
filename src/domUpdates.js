import Game from './game.js';




 // All Changes that are being made to the DOM go here

 // startGame: function(e) {
 //  e.preventDefault();
 //  $playerOneNameInput.text('hi')
 // }
let domUpdates = {


  startGame() {
    $playerOneName.text($inputOne.val())
    $playerTwoName.text($inputTwo.val())
    $playerThreeName.text($inputThree.val())
    game.createPlayers($inputOne.val(), $inputTwo.val(), $inputThree.val());
    
  }


}


export default domUpdates;