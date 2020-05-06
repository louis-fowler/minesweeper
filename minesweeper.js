document.addEventListener('DOMContentLoaded', startGame)

const trueFalse = () => {
  let fiftyFifty = Math.floor(Math.random() * Math.floor(2));
  if (fiftyFifty === 0){
    return true
  } else {
    return false
  }
}

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 1,
      col: 1,
      isMine: trueFalse(),
      hidden: true,
    },
    {
      row: 1,
      col: 2,
      isMine: trueFalse(),
      hidden: true,
    },
    {
      row: 1,
      col: 3,
      isMine: trueFalse(),
      hidden: true,
    },
    {
      row: 2,
      col: 1,
      isMine: trueFalse(),
      hidden: true,
    },
    {
      row: 2,
      col: 2,
      isMine: trueFalse(),
      hidden: true,
    },
    {
      row: 2,
      col: 3,
      isMine: trueFalse(),
      hidden: true,
    },
    {
      row: 3,
      col: 1,
      isMine: trueFalse(),
      hidden: true,
    },
    {
      row: 3,
      col: 2,
      isMine: trueFalse(),
      hidden: true,
    },
    {
      row: 3,
      col: 3,
      isMine: trueFalse(),
      hidden: true,
    }
  ]
}


console.log(board.cells.length)
function startGame () {
  for (let i = 0; 1 < board.cells.length === 0; i++) {
    return board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  let surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let count = 0;
  surrounding.forEach(i => {
    if (i.isMine === true) {
      count++
    }
  })
  return count
}

