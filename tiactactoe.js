// # TicTacToe

// Write a function called `tictactoe` that receives a matrix and returns true if it's winning for `X`, `O`, `tie`.

// ```javascript
// console.log(tictactoe([
//   ['X', '', 'O'],
//   ['', 'X', 'O'],
//   ['O', '', 'X']
// ])); // X

// console.log(tictactoe([
//   ['O', 'X', 'O'],
//   ['O', 'X', 'O'],
//   ['O', '', 'X']
// ])); // O

// console.log(tictactoe([
//   ['O', 'X', 'O'],
//   ['X', 'X', 'O'],
//   ['O', 'O', 'X']
// ])); // tie
// ```


function tictactoe (arr) {
    for ( let i = 0 ; i < arr.length ; i ++) {
     const files = arr[i][0];
     if ( files === "X" || files === "O" ) { 
         if (arr [i][1] === files && arr [i][2] === files) {
            return files;
            }
        }
    }
   
    for ( let j = 0; j < arr.length; j++ ) { 
        const colums = arr [0][j];
        if ( colums === "X" || colums === "O") { 
          if ( arr [1][j] === colums && arr [2][j] === colums ) {
            return colums;
          }
        }
    }

    if ( arr [0][2] === "X" && arr [1][1] === "X" && arr [2][0] === "X" ||
     arr [0][2] === "O" && arr [1][1] === "O" && arr [2][0] === "O" ){
         return arr [0][2];

     } else if ( arr [0][0] === "X" && arr [1][1] === "X" && arr [2][2] === "X" ||
     arr [0][0] === "O" && arr [1][1] === "O" && arr [2][2] === "O" ) {
         return arr [0][0];
     } else {
         return "tie";
     }
} 

console.log(tictactoe([
  ['X', '', 'O'],
  ['', 'X', 'O'],
  ['O', '', 'X']
])); // X

console.log(tictactoe([
  ['O', 'X', 'O'],
  ['O', 'X', 'O'],
  ['O', '', 'X']
])); // O

console.log(tictactoe([
  ['O', 'X', 'O'],
  ['X', 'X', 'O'],
  ['O', 'O', 'X']
])); // tie