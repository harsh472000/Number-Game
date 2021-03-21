var randomNumber = Math.floor(Math.random()*100)+1;
    var guesses = document.querySelector('.guesses');
    var lastResult = document.querySelector('.lastResult');
    var lowOrHigh = document.querySelector('.lowOrHigh');

    var guessSubmit = document.querySelector('.guessSubmit');
    var guessField = document.querySelector('.guessField');

    var guessCount = 1;
    var resetButton;

    guessField.focus();

    function checkGuess(){
      //alert('OMG OMG OMG');
      var userGuess = Number(guessField.value);

      if(guessCount === 1){
        guesses.textContent = 'Previous guesses: ';
      }

      guesses.textContent += userGuess + ' ';

      if(userGuess === randomNumber){
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.color = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
      } else if(guessCount ===10 ) {
        lastResult.textContent = 'GAME OVER !';
        setGameOver();
      } else {
        lastResult.textContent ='Wrong!';
        lastResult.style.color = 'red';
        if(userGuess < randomNumber){
          lowOrHigh.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber){
          lowOrHigh.textContent = 'Last guess was too high!';
        }
      }

      guessCount++;
      guessField.value = '';
      guessField.focus();
    }

    guessSubmit.addEventListener('click',checkGuess);

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
	  resetButton.className="btn btn-primary rstBtn";
      resetButton.textContent = 'Start New Game';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click',resetGame);
    }

    function resetGame() {
      guessCount = 1;

      var resetParas = document.querySelectorAll('.resultParas p');
      for(var i = 0; i < resetParas.length ; i++)
      {
        resetParas[i].textContent = '';
      }

      resetButton.parentNode.removeChild(resetButton);

      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value = '';
      guessField.focus();

      lastResult.style.backgroundColor = 'white';

      randomNumber = Math.floor(Math.random()*100)+1;
    }