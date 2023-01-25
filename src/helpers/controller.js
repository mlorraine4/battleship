import { player, computer, playerBoard, computerBoard } from "..";
import { Gameboard } from "../GameboardFactory"; 
import { randomInt } from "./enemyShipPlacement";
import { displayMove } from "../DOM/displayAttacks"
import { findShip } from "./attackShip";
import { findSunkShips } from "../DOM/displayShipHealth";
import { winnerDisplay } from "../DOM/winnerDisplay";
import { attackShip } from "./attackShip";
import { updatePlayerHealth } from "../DOM/displayShipHealth";

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
    changeTurn();
  }
  else {
    if (player.addMove(coordinates) === false) {
      return;
    }
    let attack = computerBoard.receiveAttack(coordinates);
    player.addMove(coordinates);
    displayMove(
      'compGrid', 
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