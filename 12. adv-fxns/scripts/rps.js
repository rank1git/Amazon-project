let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

let isAutoPlaying = false;
let intervalID;
// we can rewrite the autoPlay function as an arrow function but full function is preferred since it is easier to read and allows for hoising(being able to call the function before it's written)
// const autoPlay = () => {};
function autoPlay() {
  const buttonElement = document.querySelector('.js-auto-play-button');
  if (!isAutoPlaying) {
      intervalID = setInterval( () => {
      const playerMove = pickCPUMove();
      playGame(playerMove);
    }, 100);
    isAutoPlaying = true;
    buttonElement.innerText = 'Stop Play';
  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
    buttonElement.innerText = 'Auto Play';
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
});
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
      playGame('rock');
    } else if (event.key === 'p') {
      playGame('paper');
    } else if (event.key === 's') {
      playGame('scissors');
    } else if (event.key === 'a') {
      autoPlay();
    } else if (event.key === 'Backspace') {
      resetScorePrompt();
    }
});

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
});

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
});

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    resetScorePrompt();
});

document.querySelector('.js-auto-play-button')
  .addEventListener('click', () => {
    autoPlay();
});


function playGame(playerMove) {
  const computerMove = pickCPUMove();
  let result = '';
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }

    if (result === 'You win.') {
      score.wins++;
    } else if (result === 'You lose.') {
      score.losses++;
    } else score.ties++;
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    if (result === 'You win.') {
      score.wins++;
    } else if (result === 'You lose.') {
      score.losses++;
    } else score.ties++;
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
    if (result === 'You win.') {
      score.wins++;
    } else if (result === 'You lose.') {
      score.losses++;
    } else score.ties++;
  }

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You 
    <img src="emojis/${playerMove}-emoji.png" class="move-icon"/>
    <img src="emojis/${computerMove}-emoji.png" class="move-icon"/>
    Computer`;

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector(
    '.js-score'
  ).innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
}

function pickCPUMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}

function resetScorePrompt() {
  document.querySelector('.js-reset-score-prompt').innerHTML = '<p>Are you sure you want to reset the score?</p> <button class="js-yes-button">Yes</button> <button class="js-no-button">No</button>';
  document.querySelector('.js-yes-button')
    .addEventListener('click', () => {
      document.querySelector('.js-reset-score-prompt').innerHTML = '';
      resetScore();
  });

  document.querySelector('.js-no-button')
    .addEventListener('click', () => {
      document.querySelector('.js-reset-score-prompt').innerHTML = '';
  });

}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();    
}