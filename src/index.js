import './styles.css';
import { dragDropController } from './helpers/playerShipPlacement';
import { restartGame } from './helpers/restart';
import { createBoard } from './helpers/display';
import { Player } from './PlayerFactory';
import { Gameboard } from './GameboardFactory';
import { bodyMovin } from './animation'
import { redo } from './helpers/startGame'

// TODO: write restart function after game finishes to startGame.js and remove restart.js

let player;
let computer;
let playerBoard;
let computerBoard;
let currentShip;

initialize();
bodyMovin();

// player chooses their ships' location via drag drop
dragDropController(1);

let restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", restartGame);
let redoBtn = document.querySelector("#redo");
redoBtn.addEventListener("click", redo)


function initialize() {
  player = Player();
  computer = Player();
  playerBoard = Gameboard();
  computerBoard = Gameboard();

  currentShip = {
    shipCounter: 1,
    shipDiv: document.querySelector("#destroyer"),
    id: "#destroyer"
  };

  createBoard(".playerPickBoard", "playerStart");
  createBoard("#playerBoard", "playerGrid");
  createBoard("#computerBoard", "enemyGrid");
}

export { player, computer, playerBoard, computerBoard, currentShip, initialize }