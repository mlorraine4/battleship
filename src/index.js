import { UI } from "./DOM/UI";
import { Gameboard, fakePlayerGameboard } from "./GameboardFactory";
import { Player } from "./PlayerFactory";
import './styles.css';
import { findEnemyLocations } from "./helpers/enemyShipPlacement";
import { clearBoards, restartHealthDivs } from "./DOM/newGame";
import { findPlayerShips } from "./DOM/displayPlayerShips";

// DOM
UI();

// initalize game
let player = Player();
let computer = Player();
let playerBoard = fakePlayerGameboard();
let computerBoard = Gameboard();
player.turn = true;
// display enemy ships
findEnemyLocations(
  computerBoard.board,
  computerBoard.shipPlacements,
  computerBoard.myShips
);
// display player ships
findPlayerShips(playerBoard.shipPlacements);

// restart game
let button = document.querySelector(".restartDemo");
button.addEventListener("click", restartGame);

function restartGame() {
  player = Player();
  computer = Player();
  playerBoard = fakePlayerGameboard();
  computerBoard = Gameboard();
  player.turn = true;

  findEnemyLocations(
    computerBoard.board,
    computerBoard.shipPlacements,
    computerBoard.myShips
  );
  
  restartHealthDivs();
  clearBoards();
  UI();
  findPlayerShips(playerBoard.shipPlacements);

}

export { player, computer, playerBoard, computerBoard };