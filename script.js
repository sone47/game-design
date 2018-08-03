const NUMBER_RANGE = 100;
    const CHANCES_NUMBER = 10;
    const TIPS = ['Too low!', 'Correct!', 'Too high!'];

    const guessBtn = document.querySelector('#guess-btn');
    const startBtn = document.querySelector('#start-btn');
    const input = document.querySelector('#input');
    const tip = document.querySelector('#tip');

    startBtn.addEventListener('click', start);

    function onGuess() {
      const inputValue = Number(input.value);
      remainChances = remainChances - 1;
      let tipValue = '';

      if(remainChances) {
        tipValue = 'You remain ' + remainChances + ' chances.';

        if(validateInput(inputValue)) {
          if(inputValue < randomNumber) {
            tipValue = TIPS[0] + tipValue;
          } else if(inputValue > randomNumber) {
            tipValue = TIPS[2] + tipValue;
          } else if(inputValue === randomNumber) {
            tipValue = TIPS[1];
            gameOver(true);
          }
        } else {
          tipValue = 'Input should be a number. ' + 'You remain ' + remainChances + ' chances.';
        }
      } else {
        tipValue = 'Opps! You missed the last chance! The mystery number is ' + randomNumber + '. You can restart and guess again.';
        gameOver(false);
      }

      tip.textContent = tipValue;
    }

    function clickHanlder() {
      onGuess();
    }

    function keyDownHandler(e) {
      if(e.keyCode === 13) {
        onGuess();
      }
    }

    function start() {
      randomNumber = getRandomNumber();
      remainChances = CHANCES_NUMBER;
      clearText();
      enableAll();
    }

    function getRandomNumber() {
      return Math.ceil(Math.random() * NUMBER_RANGE);
    }

    function gameOver(won) {
      disableAll();
    }

    function clearText() {
      tip.textContent = '';
      input.value = '';
    }

    function enableAll() {
      guessBtn.disabled = false;
      input.disabled = false;
      input.focus();
      guessBtn.addEventListener('click', clickHanlder);
      input.addEventListener('keydown', keyDownHandler);
    }

    function disableAll() {
      guessBtn.disabled = true;
      input.disabled = true;
      guessBtn.removeEventListener('click', clickHanlder);
      input.removeEventListener('keydown', keyDownHandler);
    }

    function validateInput(input) {
      return !isNaN(input);
    }