"use strict";
/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const resetBtnEl = document.getElementById('btn');
/*----------------------------- Event Listeners -----------------------------*/
document.querySelector('.board')?.addEventListener('click', handleClick);
resetBtnEl?.addEventListener('click', init);
/*-------------------------------- Functions --------------------------------*/
init();
function init() {
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turn = 1;
    winner = false;
    tie = false;
    render();
}
function render() {
    updateBoard();
    updateMessage();
}
function updateBoard() {
    board.forEach((sqr, idx) => {
        if (sqr === 1) {
            squareEls[idx].innerText = 'X';
            squareEls[idx].style.color = 'red';
        }
        else if (sqr === -1) {
            squareEls[idx].innerText = 'O';
            squareEls[idx].style.color = 'blue';
        }
        else {
            squareEls[idx].innerText = '';
        }
    });
}
function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.textContent = turn === -1 ? "Player O's Turn" : "Player X's Turn";
        messageEl.style.color = turn === -1 ? 'blue' : 'red';
    }
    else if (winner === false && tie === true) {
        messageEl.textContent = "CAT!";
        messageEl.style.color = 'purple';
    }
    else {
        messageEl.textContent = turn === -1 ? "Player O Won!" : "Player X Won!";
        messageEl.style.color = turn === -1 ? 'blue' : 'red';
    }
}
