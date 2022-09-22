let player1 = prompt("Player One: Please enter your name. You will be BLUE.");
let player1Color = 'rgb(86, 151, 255)';

let player2 = prompt("Player Two: Please enter your name. You will be RED.");
let player2Color = 'rgb(237, 45, 73)';

let gameOn = true;
let table = $('table tr');

function reportWin(rowNum, colNum) {
    console.log("You won starting at this row, column.")
    console.log(rowNum);
    console.log(colNum);
}

function setColor(rowIndex, colIndex, color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

function getColor(rowIndex, colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex) {
    let colorReport = getColor(5, colIndex);
    for (let row = 5; row > -1; row--) {
        colorReport = getColor(row, colIndex)
        if (colorReport == 'rgb(128, 128, 128)') {
            return row;
        }
    }
}

function colorMatchCheck(one, two, three, four) {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}


function gameEnd(winningPlayer) {
    for (var col = 0; col < 7; col++) {
        for (var row = 0; row < 7; row++) {
            $('h3').fadeOut('fast');
            $('h2').fadeOut('fast');
            $('h1').text(winningPlayer + " has won! Refresh your browser to play again!").css("fontSize", "50px")
        }
    }
}
function horizontalWinCheck() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (colorMatchCheck(getColor(row, col), getColor(row, col + 1), getColor(row, col + 2), getColor(row, col + 3))) {
                console.log('horiz');
                reportWin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }
}

function verticalWinCheck() {
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) {
            if (colorMatchCheck(getColor(row, col), getColor(row + 1, col), getColor(row + 2, col), getColor(row + 3, col))) {
                console.log('vertical');
                reportWin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }
}

function diagonalWinCheck() {
    for (let col = 0; col < 5; col++) {
        for (let row = 0; row < 7; row++) {
            if (colorMatchCheck(getColor(row, col), getColor(row + 1, col + 1), getColor(row + 2, col + 2), getColor(row + 3, col + 3))) {
                console.log('diag');
                reportWin(row, col);
                return true;
            } else if (colorMatchCheck(getColor(row, col), getColor(row - 1, col + 1), getColor(row - 2, col + 2), getColor(row - 3, col + 3))) {
                console.log('diag');
                reportWin(row, col);
                return true;
            } else {
                continue;
            }
        }
    }
}


let currentPlayer = 1;
let currentName = player1;
let currentColor = player1Color;


$('h3').text(player1 + ": it is your turn, please pick a column to drop your blue chip.");
console.log(player1);

$('.board button').on('click', function () {

    let col = $(this).closest("td").index();

    let bottomAvail = checkBottom(col);

    setColor(bottomAvail, col, currentColor);

    // Check for a win or a tie.
    if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
        gameEnd(currentName);
    }

    // If no win or tie, continue to next player
    currentPlayer = currentPlayer * -1;

    // Re-Check who the current Player is.
    if (currentPlayer === 1) {
        currentName = player1;
        $('h3').text(currentName + ": it is your turn, please pick a column to drop your blue chip.");
        currentColor = player1Color;
    } else {
        currentName = player2
        $('h3').text(currentName + ": it is your turn, please pick a column to drop your red chip.");
        currentColor = player2Color;
    }

})



// Helper function to help you understand Rows and Columns From A Table
// http://stackoverflow.com/questions/788225/table-row-and-column-number-in-jquery
//
// $('.board button').on('click',function(){
//   // This is the Column Number (starts at zero):
//   console.log('This is the Column:');
//   console.log($(this).closest("td").index());
//   // This is the Row Number:
//   console.log("This is the Row:");
//   console.log($(this).closest("tr").index());
//   console.log('\n');
//   // This is a way to grab a particular cell (replace):
//   // $('table').eq(rowIndex).find('td').eq(colIndex)
// });

// // Change color on click
// $('.board button').on('click',function() {
//   if($(this).css('background-color') === 'rgb(51, 51, 51)'){
//     $(this).css('background-color','rgb(86, 151, 255)');
//   }else if ($(this).css('background-color') === 'rgb(86, 151, 255)'){
//     $(this).css('background-color','rgb(237, 45, 73)');
//   }else{
//     $(this).css('background-color','rgb(51, 51, 51)');
//   }
// });