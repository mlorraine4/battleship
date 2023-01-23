import { player, computer, playerBoard, computerBoard } from ".";
import { Gameboard } from "./gameboard"; 
import { randomInt } from "./enemyShipPlacement";
import { duplicateMove } from "./moves";
import { displayMove } from "./DOM/displayAttacks";
import { findShip, upateHealth } from "./attackShip";
import { findSunkShips } from "./DOM/sunkEnemyShips";
import { winnerDisplay } from "./DOM/winnerDisplay";

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
      upateHealth( findShip(coordinates, playerBoard.myShips) );
    }
    if (playerBoard.allShipsSunk()) {
      return endGame(false);
    }
    changeTurn();
  }
  else {
    if (player.addMove(coordinates) === false) {
      return duplicateMove();
    }
    player.addMove(coordinates);
    displayMove( 'compGrid', coordinates, computerBoard.receiveAttack(coordinates) );
    findSunkShips(computerBoard.myShips);
    if (computerBoard.allShipsSunk() === true) {
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