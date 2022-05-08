// Declare the global variable i.e puzzle: 
let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

let puzzleCopy = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]]; // => false


// define the Row Function:
function getRow(puzzle, rowIndex) {
    // creating a variable that combines both puzzle & rowIndex from function parameter
    let grid = [puzzle[rowIndex]];
    
return grid;
}

// define the Column Function:
function getColumn(puzzle, columnIndex) {
    // creating a varible that is a open-placeholder array
     let column = [];
     //creating a loop for column index
     for (let i = 0; i < puzzle.length; i++) {
    // creating a new variable for puzzle index[i] and columnIndex
        let grabColumn = puzzle[i][columnIndex];
         column.push(grabColumn); // pushing the variable grabColumn into the open-placeholder variable called column
    }
    return column;
}

// define the Section Function:
function getSection(puzzle, yIndex, xIndex) {
    // creating a variable that is a open-placeholder array
    let section = [];
    //declaring new data values
    xIndex *= 3;
    yIndex *= 3;
    // creating a loop for xIndex and yIndex 
    for (let i = xIndex; i < xIndex + 3; i++ ) {
        for (let j = yIndex; j < yIndex + 3; j++) {
            section.push(puzzle[i][j]);
        }
    }
    return section;
}

//define includes1to9 Function:
function includes1to9(puzzleArr) {
    // creating a variable to hold the index of each array.
    for(let i = 1; i <= puzzleArr.length; i++) {
        if(puzzleArr.indexOf(i) === -1) {
            return false;
         }
     }
    return true;
}

// define function that is a sudoku checker:
function sudokuIsValid(puzzle) {
    // creating a loop to obtain the coordinates for the checker
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            //creating a variable to hold the data value of the call function of getSection
            let checkOn = getSection(puzzle, i, j);
            // if #'s 1-9 is not  strictly true then it returns false
            if(includes1to9(checkOn) !== true) {
        
                return false;
            }
        }
    } 
 return true;
}

function isSame(puzzle1, puzzle2) {
    for(let i = 0; i < puzzle1.length; i++){
        for (let j = 0; j < puzzle2.length; j++) {
            if(puzzle1[i][j] !== puzzle2[i][j]) {
                console.log(false)
                return false
            }
        }
    }
return true;
}

// sudokuIsValid(puzzle); // => true
// sudokuIsValid(p8zzle); 
// => false

// isSame(puzzle, p8zzle); // => false
// isSame(puzzle, puzzleCopy); // => true

// getRow(puzzle, 8);
// // -> [ 3,2,8,1,9,6,5,4,7 ]

// getRow(puzzle, 0);
// // -> [ 8,9,5,7,4,2,1,3,6 ]

// getColumn(puzzle, 0);
// -> [ 8,2,4,9,5,6,1,7,3 ]

// getColumn(puzzle, 8);
// -> [ 6,5,2,8,4,1,3,9,7 ]

// getSection(puzzle, 0, 0);
// -> [ 8,9,5,2,7,1,4,6,3 ]

// This grabs the values from column 0 and row 1 (second from the top left)
// getSection(puzzle, 1,0);
// -> [ 7,4,2,9,6,3,5,8,1 ]

// includes1to9([1,2,3,4,5,6,7,8,9]) // => true
// includes1to9([1,1,2,3,4,5,6,7,8]) // => false (no 9)



