// let number_of_game_Element = document.querySelector('#number_Of_game');
// let game_flow_Element = document.querySelector('#game_Info ');
// let new_game_Button = document.querySelector('#button_new_game');

// let player_X_Element = document.querySelector('#player_X ');
// let player_O_Element = document.querySelector('#player_O ');
// let score_X_Element = document.querySelector('#score_X ');
// let score_O_Element = document.querySelector('#score_O ');
// let reset_Button = document.querySelector('#button_reset ');
// new_game_Button.disabled = false;

// let currentPlayer = 'X'; // X is the starting player.
// let playerXSelections = [];
// let playerOSelections = [];
// let you_win = false;
// let color;
// let complete_field = false;
// let game_count = 0;
// let score_for_X_player = 0;
// let score_for_O_player = 0;

// number_of_game_Element.innerHTML = "#";
// game_flow_Element.innerHTML = "Let's play!!!";
// player_X_Element.innerHTML = "Player X";
// player_O_Element.innerHTML = "Player O";
// player_X_Element.setAttribute("style", "color:black; font-size: 1em;");
// player_O_Element.setAttribute("style", "color:black; font-size: 1em;");
// score_X_Element.innerHTML = 0;
// score_O_Element.innerHTML = 0;
// new_game_Button.disabled = false;
//=================================================================

// initalize global variables we will need
let currentPlayer = 'X';
let playerXSelections = [];
let playerOSelections = [];
let xWinCount = 0
let oWinCount = 0
let drawCount = 0

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

// get elements we need from our HTML
let bodyElement = document.querySelector('body')
let mainElement = document.querySelector('main')

// create the elements we need
let resetButton = myDOMHelper('button', bodyElement, 'Reset', 'reset')
let turnDiv = myDOMHelper('div', bodyElement, "X's turn", 'turn')
let winnerDiv = myDOMHelper('div', bodyElement, '', 'winner' )

for(let counter = 1; counter <= 9; counter = counter + 1){
    myDOMHelper('div', mainElement, "", counter, 'grid-cell')
}

// get an array of all the elements with a class of grid-cell from the page
let cellElementArray = document.querySelectorAll('.grid-cell');

// loop through cellElementArray and add a "click" event listener to each element
for (let i = 0; i < cellElementArray.length; i = i + 1) {
    let currentCellElement = cellElementArray[i]
    currentCellElement.addEventListener('click', moveHandler);
}

// add click event listener to reset button
resetButton.addEventListener("click", resetBoard)