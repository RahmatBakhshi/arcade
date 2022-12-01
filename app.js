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
    let b = parseInt( coord[1]);


    if (board[a][b] != ' '){
        return;
    }


board [a][b] = currentPlayer;
this.innerText = currentPlayer;


if(currentPlayer == playerO) {
    currentPlayer = playerX;
    //switches turns

}
else {
    currentPlayer = playerO;

}
checkWin();


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
document.getElementsByClassName("restartBtn").addEventListener('click', function(){
    window.location.reload();
    return false;
  });
