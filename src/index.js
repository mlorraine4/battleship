import { UI } from "./DOM/UI";
import { Gameboard, fakePlayerGameboard } from "./gameboard";
import { Player } from "./player";
import './styles.css';
import { winnerDisplay } from "./DOM/winnerDisplay";
import { findEnemyLocations } from "./enemyShipPlacement";

UI();

let player = Player();
let computer = Player();
let playerBoard = fakePlayerGameboard();
let computerBoard = Gameboard();
player.turn = true;


findEnemyLocations(computerBoard.board, computerBoard.shipPlacements, computerBoard.myShips);

// winnerDisplay(false);

export { player, computer, playerBoard, computerBoard };