import './styles.css';
import { dragDropController } from './helpers/playerShipPlacement';
import { createBoard } from './helpers/display';
import { Player } from './PlayerFactory';
import { Gameboard } from './GameboardFactory';
import { bodyMovin } from './helpers/animation'
import { addButtonListeners } from './helpers/startGame'

// TODO: write restart function after game finishes to startGame.js and remove restart.js

let player;
let computer;
let playerBoard;
let computerBoard;
let currentShip;

initialize();
createBoard(".playerPickBoard", "playerStart");
createBoard("#playerBoard", "playerGrid");
createBoard("#computerBoard", "enemyGrid");
bodyMovin();
// player chooses their ships' location via drag drop
dragDropController(1);
addButtonListeners();

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
}

export { player, computer, playerBoard, computerBoard, currentShip, initialize }