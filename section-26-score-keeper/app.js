// get the html elements
const btnPlayer1 = document.querySelector('#btn-player-1');
const btnPlayer2 = document.querySelector('#btn-player-2');
const scorePlayer1 = document.querySelector('#player1');
const scorePlayer2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');
const selectRounds = document.querySelector('#num-rounds');

// keeps the score
let score1 = 0;
let score2 = 0;
let isGameOver = false;
let maxScore = parseInt(selectRounds.selectedOptions[0].innerText);

function checkWinner() {
    if (score1 >= maxScore) {
        scorePlayer1.classList.toggle('winner');
        scorePlayer2.classList.toggle('loser');
        btnPlayer1.disabled = btnPlayer2.disabled = true;
        isGameOver = true;
    } else if (score2 >= maxScore) {
        scorePlayer2.classList.toggle('winner');
        scorePlayer1.classList.toggle('loser');
        btnPlayer1.disabled = btnPlayer2.disabled = true;
        isGameOver = true;
    }
}

// buttons
btnPlayer1.addEventListener('click', () => {
    if (!isGameOver) {
        score1++;
        scorePlayer1.innerText = score1;
        checkWinner();
    }
});

btnPlayer2.addEventListener('click', () => {
    if (!isGameOver) {
        score2++;
        scorePlayer2.innerText = score2;
        checkWinner();
    }
});

// must use function instead of arrow function to "this" works.
selectRounds.addEventListener('change', function() {
    maxScore = parseInt(this.value);
})

reset.addEventListener('click', () => {
    score1 = score2 = 0;
    scorePlayer1.innerText = score1;
    scorePlayer2.innerText = score2;
    scorePlayer1.classList.remove(...scorePlayer1.classList);
    scorePlayer2.classList.remove(...scorePlayer2.classList);
    btnPlayer1.disabled = btnPlayer2.disabled = false;
    isGameOver = false;
});