import { player, playerBoard, computerBoard, computer } from "..";
import { controller } from "./controller";
import { clearPickBoard, createBoard, displayShips } from "./display";
import { findEnemyLocations } from "./enemyShipPlacement";
import { addShipLocations } from "./playerShipPlacement";

// redo
function redo() {
  clearPickBoard();
  createBoard(".playerPickBoard", "playerStart");
  playerBoard.shipPlacements = [];

  // TODO:add ships back to empty divs; use parent div to add class = ship and id = name, draggable true for destroyer
  // TODO:hide start/redo buttons div
  // TODO:opactiy 1 of game again
};

// game begins after player chooses ship locations
function startGame() {

  addShipLocations();

  findEnemyLocations(
    computerBoard.board,
    computerBoard.shipPlacements,
    computerBoard.myShips
  );
  displayShips(playerBoard.shipPlacements, "playerGrid");
  window.addEventListener("click", handleClick);

  setTimeout(() => {
    player.turn = true;
  }, 500)
}

// game listener
function handleClick(event) {
    if (event.target.className.includes('playerGrid') || event.target.id === "") {
        return;
    }
    if (player.turn) {
        controller(event.target.id);
    }
}

export { startGame, redo }
/*
credits:
<a href="https://www.flaticon.com/free-icons/damage" title="damage icons">Damage icons created by Febrian Hidayat - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Pixel perfect - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/battleship" title="battleship icons">Battleship icons created by Darius Dan - Flaticon</a>
*/