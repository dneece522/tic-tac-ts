/*-------------------------------- Constants --------------------------------*/

const winningCombos: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

let board: number[], turn: number, winner: boolean, tie: boolean

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll<HTMLElement>('.sqr')
const messageEl = document.querySelector<HTMLHeadingElement>('#message')
const resetBtnEl = document.querySelector<HTMLButtonElement>('#btn')

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector<HTMLElement>('.board')?.addEventListener('click', handleClick)
resetBtnEl?.addEventListener('click', init)