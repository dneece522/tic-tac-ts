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
const messageEl = document.getElementById('message') as HTMLHeadingElement
const resetBtnEl = document.getElementById('btn') as HTMLButtonElement
const boardEl = document.getElementById('board') as HTMLElement

/*----------------------------- Event Listeners -----------------------------*/

boardEl?.addEventListener('click', handleClick)
resetBtnEl?.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

init()

function init(): void {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  turn = 1
  winner = false
  tie = false
  render()
}

function render(): void {
  updateBoard()
  updateMessage()
}

function updateBoard(): void {
  board.forEach((sqr, idx) => {
    if (sqr === 1) {
      squareEls[idx].innerText = 'X'
      squareEls[idx].style.color = 'red'
    } else if (sqr === -1) {
      squareEls[idx].innerText = 'O'
      squareEls[idx].style.color = 'blue'
    } else {
      squareEls[idx].innerText = ''
    }
  })
}

function updateMessage(): void {
  if (winner === false && tie === false) {
    messageEl.textContent = turn === -1 ? "Player O's Turn" :  "Player X's Turn"
    messageEl.style.color = turn === -1 ? 'blue' :  'red'
  } else if (winner === false && tie === true) {
    messageEl.textContent = "CAT!"
    messageEl.style.color = 'purple'
  } else {
    messageEl.textContent = turn === -1 ? "Player O Won!" :  "Player X Won!"
    messageEl.style.color = turn === -1 ? 'blue' :  'red'
  }
}

function handleClick(evt: MouseEvent): void {
  if (!(evt.target instanceof HTMLElement)) return
  let sqIdx: number = parseInt(evt.target.id.replace('sq', ''))

  if (board[sqIdx] !== 0) return
  if (winner === true) return

  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}

function placePiece(idx: number): void {
  board[idx] = turn
}

function checkForTie(): void {
  if (board.some(board => board === 0)) {
    tie = false
  } else {
    tie = true
  }
}

function checkForWinner(): void {
  for (let i = 0; i < winningCombos.length; i++) {
    let total: number = Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]])
    if (total === 3) {
      winner = true
    }
  }
}

function switchPlayerTurn(): void {
  if (winner === true) {
    return
  } else {
    turn = turn * -1
  }
}