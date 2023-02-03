import { player, computer, playerBoard, computerBoard } from "..";
import { Gameboard } from "../GameboardFactory"; 
import { randomInt } from "./enemyShipPlacement";
import { displayMove } from "./display"
import { findShip } from "./attackShip";
import { findSunkShips } from "./display";
import { winnerDisplay, displayTurn } from "./display";
import { attackShip } from "./attackShip";
import { updatePlayerHealth } from "./display";

function controller(coordinates) {
  if (computer.turn) {
    let attack = playerBoard.receiveAttack(coordinates);
    computer.addMove(coordinates);
    displayMove(
      "playerGrid",
      coordinates,
      attack
    );
    if (attack) {
      attackShip( findShip(coordinates, playerBoard.myShips) );
      updatePlayerHealth( findShip(coordinates, playerBoard.myShips) );
    }
    if (playerBoard.allShipsSunk()) {
      return endGame(false);
    }
    displayTurn("player");
    changeTurn();
  }
  else {
    if (player.addMove(coordinates) === false) {
      return;
    }
    let attack = computerBoard.receiveAttack(coordinates);
    player.addMove(coordinates);
    displayMove(
      'enemyGrid', 
      coordinates, 
      attack
    );
    if (attack) {
      attackShip(findShip(coordinates, computerBoard.myShips));
    }
    findSunkShips(computerBoard.myShips);
    if (computerBoard.allShipsSunk()) {
      return endGame(true);
    }
    displayTurn("computer");
    changeTurn();
    setTimeout(controller, 1000, checkEnemyTurn());
  }
}

function changeTurn() {
  player.turn = !player.turn;
  computer.turn = !computer.turn;
}

function enemyTurn() {
  let move = Gameboard().board[randomInt()][randomInt()];
  return move;
}

function checkEnemyTurn() {
  let move;
  do { move = enemyTurn();
  } while (computer.addMove(move) === false);
  return move;
}

function endGame(win) {
  player.turn = false;
  computer.turn = false;
  winnerDisplay(win);
}

export { controller, enemyTurn };