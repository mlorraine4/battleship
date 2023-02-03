import { player, playerBoard, computerBoard, initialize, currentShip } from "..";
import { controller } from "./controller";
import { clearPickBoard, displayShips, displayPick } from "./display";
import { findEnemyLocations } from "./enemyShipPlacement";
import { addShipLocations, displayNextShip, dragDropController } from "./playerShipPlacement";

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

// redo for player choosing ship locations
function redo() {
  clearPickBoard();
  displayPick();
  initialize();
  displayNextShip(currentShip.id);
  dragDropController(1);
};

function restart() {
  // TODO: write fnc
}

export { startGame, redo }
/*
credits:
<a href="https://www.flaticon.com/free-icons/damage" title="damage icons">Damage icons created by Febrian Hidayat - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Pixel perfect - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/battleship" title="battleship icons">Battleship icons created by Darius Dan - Flaticon</a>
*/