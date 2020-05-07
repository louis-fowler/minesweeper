document.addEventListener("DOMContentLoaded", startGame);

const trueFalse = () => {
  let fiftyFifty = Math.floor(Math.random() * Math.floor(2));
  if (fiftyFifty === 0) {
    return true;
  } else {
    return false;
  }
};

const boardInit = x => {
  let sqrt = Math.sqrt(x);
  let rowInit = 1;
  for (x = 1; x <= sqrt; x++) {
    rowInit = x;
  }
  let colInit = 3;
  for (i = 1; i <= 9; i++) {
    board.cells.push({
      row: rowInit,
      col: i,
      isMine: trueFalse(),
      hidden: true,
    });
  }
};

// Define your `board` object here!
var board = {
  cells: [],
};

function startGame() {
  let newKey = board.cells.forEach(i => {
    i.surroundingMines = countSurroundingMines(i);
  });
  // Don't remove this function call: it makes the game work!
  boardInit();
  lib.initBoard();
  document.addEventListener("click", checkForWin);
  return newKey;
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {
  // check to see if there are any divs with hidden class names (need to add toggle to hidden class in lib.js)
  // let hidden = document.querySelectorAll('.hidden').length;
  // if (hidden === 0){
  //   lib.displayMessage('You win!')
  // }

  // lets see if I can do it the 'proper' way - follow the prompts
  for (x = 0; x < board.cells.length; x++) {
    let cell = board.cells[x];
    // find unchecked mine
    if (cell.isMine === true && cell.isMarked !== true) {
      return;
      // check for non-mines that are hidden
    } else if (cell.isMine === false && cell.hidden === true) {
      return;
    }
  }
  displayMessage("You win!");
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
function countSurroundingMines(cell) {
  let surrounding = lib.getSurroundingCells(cell.row, cell.col);
  let count = 0;
  surrounding.forEach(i => {
    if (i.isMine === true) {
      count++;
    }
  });
  return count;
}
