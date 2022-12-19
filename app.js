var board;
var playerO = "O";
var playerX = "x";
var currentPlayer = playerO;
var gameOver= false;
// naming our variables


window.onload = function(){
    setStart();
    // when the screen loads


}
function setStart(){
board = [
    [' ', ' ', ' ',],
    [' ', ' ', ' ',],
    [' ', ' ', ' ',]
    // our board

]
for (let a = 0; a < 3; a++){
     for (let b = 0; b < 3; b++){
        let tile = document.createElement("div");
        tile.id = a.toString() + "-"  + b.toString();
        tile.classList.add("tile");
        // adding our style class
        if ( a == 0 || a == 1)
        // adding the horizional tile
{
tile.classList.add("horizontal-line");
}
if (b == 0 || b == 1){
    tile.classList.add("vertical-line");
    //adding vertical line
}
tile.innerText = "";
tile.addEventListener("click", setTile);
// making each tile clickable and calling the function setTile
document.getElementById("board").appendChild(tile);

}
}
}
function setTile(){
    if (gameOver){
      return;
      // set for the game to be over and wont be clickable
    }

    let coord = this.id.split("-");
    let a = parseInt(coord[0]);
    let b = parseInt(coord[1]);

    if (board[a][b] != ' '){
      return;
    }

    board[a][b] = currentPlayer;
    this.innerText = currentPlayer;

    if(currentPlayer == playerO) {
      currentPlayer = playerX;
      //switches turns
      makeComputerMove();
    }
    else {
      currentPlayer = playerO;
    }

    checkWin();
  }

  function makeComputerMove() {
    let emptyTiles = [];
    for (let a = 0; a < 3; a++) {
      for (let b = 0; b < 3; b++) {
        if (board[a][b] == ' ') {
          emptyTiles.push([a, b]);
        }
      }
    }
    if (emptyTiles.length == 0) {
      return;
    }
    let randomTile = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    let a = randomTile[0];
    let b = randomTile[1];
    board[a][b] = currentPlayer;
    let tile = document.getElementById(a.toString() + "-" + b.toString());
    tile.innerText = currentPlayer;
  }
function checkWin(){
    // check to see if won first horizontally
    for (let a = 0; a < 3; a++ ){
        if (board[a][0] == board[a][1] && board [a][1] == board [a][2] && board [a][0] != ' '){
            for(let i = 0; i < 3; i++){
                let tile =document.getElementById(a.toString() + "-" + i.toString());
tile.classList.add("won");
// adding highlighted tile to when the game is over
            }
            gameOver= true;
            return;


        }
    }
    for (let b = 0; b < 3; b++) {
        if (board[0][b] == board[1][b] && board[1][b] ==  board[2][b] && board[0][b] != ' ') {
            //looking to see if won by vertically

            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(i.toString() + "-" + b.toString());
                tile.classList.add("won");
                //adding the winning background
            }
            gameOver = true;
            return;
        }
    }
// going to check if won diagonally
if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' '){
    for (let i = 0; i < 3; i++){
        let tile = document.getElementById(i.toString()+ "-" + i.toString());
        tile.classList.add("won");
    }
    gameOver = true;
    return;

}
// going to see if won reverse diagonally
if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {

    let tile = document.getElementById("0-2");
    tile.classList.add("won");


    tile = document.getElementById("1-1");
    tile.classList.add("won");

    tile = document.getElementById("2-0");
    tile.classList.add("won");
    gameOver = true;
    return;
}
}
// page refreshes when u click restart

function restartGame() {
    // Reset the game board
    board = [    [' ', ' ', ' ',],
      [' ', ' ', ' ',],
      [' ', ' ', ' ',]
    ];

    // Remove all the tiles from the board element
    let boardElement = document.getElementById("board");
    while (boardElement.firstChild) {
      boardElement.removeChild(boardElement.firstChild);
    }

    // Set the current player back to playerO
    currentPlayer = playerO;

    // Set the gameOver flag to false
    gameOver = false;

    // Call setStart to create the new game board
    setStart();
  }

  // Add an event listener to the restart button to call the restartGame function when the button is clicked
  document.querySelector(".restartBtn").addEventListener("click", restartGame);


  document.getElementById("set-name-button").addEventListener("click", function() {
    playerO = document.getElementById("playerO-name").value;
  });

function restartGame() {
    // reset the board and other game state variables
    board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    currentPlayer = playerO;
    gameOver = false;

    // reset the display of the tiles
    let tiles = document.querySelectorAll(".tile");
    for (let i = 0; i < tiles.length; i++) {
      tiles[i].innerText = "";
      tiles[i].classList.remove("won");
    }
  }
 oi
