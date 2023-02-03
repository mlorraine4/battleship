import { player, playerBoard, computerBoard, initialize, currentShip } from "..";
import { controller } from "./controller";
import { displayShips, displayPick, refreshPickBoard, refreshGameBoards, hideGameBoards, showPickBoard } from "./display";
import { randomShipLocations } from "./enemyShipPlacement";
import { addShipLocations, displayNextShip, dragDropController } from "./playerShipPlacement";

// game begins after player chooses ship locations
function startGame() {

  addShipLocations();

  randomShipLocations(
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

// button fncs
function addButtonListeners() {
  let restartBtn = document.querySelector(".restart");
  restartBtn.addEventListener("click", restartGame);
  console.log(restartBtn);
  let redoBtn = document.querySelector("#redo");
  redoBtn.addEventListener("click", redo);
  let randomBtn = document.querySelector(".randomShips");
  console.log(randomBtn);
  randomBtn.addEventListener("click", () => {
    if (currentShip.shipCounter === 6) {
      return;
    }
    initialize();
    refreshPickBoard();
    document.querySelectorAll(".empty")[1].innerHTML = "";
    randomShipLocations(playerBoard.board, playerBoard.shipPlacements, playerBoard.myShips);
    displayShips(playerBoard.shipPlacements, "playerStart");
    dragDropController(6);
  });
};

// redo for player choosing ship locations
function redo() {
  refreshPickBoard();
  displayPick();
  initialize();
  displayNextShip(currentShip.id);
  dragDropController(1);
};

function restartGame() {
  document.querySelector(".modal").style.opacity = "1";
  document.querySelector(".winDisplay").style.display = "none";
  hideGameBoards();
  refreshPickBoard();
  refreshGameBoards();
  showPickBoard();
  initialize();
  displayNextShip(currentShip.id);
  dragDropController(1);
}

export { startGame, redo, addButtonListeners }
/*
credits:
<a href="https://www.flaticon.com/free-icons/damage" title="damage icons">Damage icons created by Febrian Hidayat - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/close" title="close icons">Close icons created by Pixel perfect - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/battleship" title="battleship icons">Battleship icons created by Darius Dan - Flaticon</a>
*/