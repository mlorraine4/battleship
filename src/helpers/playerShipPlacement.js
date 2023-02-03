import { isLocationOccupied } from "./enemyShipPlacement";
import { Board } from "./createBoard";
import { playerBoard, currentShip } from "..";
import { displayReady, infoText } from "./display";

const dragDropController = (shipCounter) => {

  if (shipCounter === 1) {
    document.querySelector(currentShip.id).setAttribute("draggable", "true");
    dragDrop(currentShip.id, 2);
  }
  if (shipCounter === 2) {
    currentShip.id = "#submarine";
    displayNextShip(currentShip.id);
    dragDrop(currentShip.id, 3);
  }
  if (shipCounter === 3) {
    currentShip.id = "#cruiser";
    displayNextShip(currentShip.id);
    dragDrop(currentShip.id, 3);
  }
  if (shipCounter === 4) {
    currentShip.id = "#battleship";
    displayNextShip(currentShip.id);
    dragDrop(currentShip.id, 4);
  }
  if (shipCounter === 5) {
    currentShip.id = "#carrier";
    displayNextShip(currentShip.id);
    dragDrop(currentShip.id, 5);
  }
  if (shipCounter === 6) {
    currentShip.id = "";
    displayReady();
    infoText().ready();
  }
}

// ship: is the id of selected ship
// size is size of ship
const dragDrop = (shipID, size) => {

  infoText().playerStart(shipID);
  document.querySelector(shipID).addEventListener("dragstart", dragStart);

  function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  let gridItems = document.querySelectorAll(".playerStart");
  gridItems.forEach((gridItem) => {
    gridItem.addEventListener("dragenter", dragEnter);
    gridItem.addEventListener("dragover", dragOver);
    gridItem.addEventListener("dragleave", dragLeave);
    gridItem.addEventListener("drop", drop);
  });

  function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  function dragOver(e) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  function dragLeave(e) {
    e.target.classList.remove("drag-over");
    e.target.classList.remove("taken");
  }

  function drop(e) {
    e.target.classList.remove("drag-over");
    let id = e.dataTransfer.getData('text/plain');
    let draggable = document.getElementById(id);
    if (draggable === null) {
      return
    }
    DOM().removeDisplay();
    e.target.appendChild(draggable);
    infoText().pickDirection();
    draggable.classList.remove("hide");
    if ( findPossibleDirections(e.target.id, size) === false ){
      e.target.classList.add("taken");
    };
  }
};

const rows = Board().rows;
const columns = Board().columns;
const board = Board().createBoard();

function row(coordinate) {
  for (let i = 0; i < rows.length; i++) {
    if (coordinate.charAt(0) === rows[i]) {
      return i;
    }
  }
}

function column(coordinate) {
  for (let i = 0; i < columns.length; i++) {
    if (coordinate.slice(1) === String(columns[i])) {
      return i;
    }
  }
}

function moveLeft(shipSize, row, column) {
  let coordinates = [];
  for (let i = 0; i < shipSize; i++) {
    if (board[column] === undefined) {
      return null;
    } else {
      coordinates[i] = board[row][column];
    }
    column--;
  }
  return coordinates;
}

function moveRight(shipSize, row, column) {
  let coordinates = [];
  for (let i = 0; i < shipSize; i++) {
    if (board[column] === undefined) {
      return null;
    } else {
      coordinates[i] = board[row][column];
    }
    column++;
  }
  return coordinates;
}

function moveUp(shipSize, row, column) {
  let coordinates = [];
  for (let i = 0; i < shipSize; i++) {
    if (board[row] === undefined) {
      return null;
    } else {
      coordinates[i] = board[row][column];
    }
    row--;
  }
  return coordinates;
}

function moveDown(shipSize, row, column) {
  let coordinates = [];
  for (let i = 0; i < shipSize; i++) {
    if (board[row] === undefined) {
      return null;
    } else {
      coordinates[i] = board[row][column];
    }
    row++;
  }
  return coordinates;
}

function findPossibleDirections(coordinate, shipSize) {
  let up = false;
  let down = false;
  let right = false;
  let left = false;
  let upArray = moveUp(shipSize, row(coordinate), column(coordinate));
  let downArray = moveDown(shipSize, row(coordinate), column(coordinate));
  let rightArray = moveRight(shipSize, row(coordinate), column(coordinate));
  let leftArray = moveLeft(shipSize, row(coordinate), column(coordinate));
  if (upArray !== null && (isLocationOccupied(upArray, playerBoard.shipPlacements) === false) ) {
    DOM().display(upArray);
    up = true;
  }
  if (downArray !== null && ( isLocationOccupied(downArray, playerBoard.shipPlacements) === false) ) {
    DOM().display(downArray);
    down = true;
  }
  if (
    rightArray !== null &&
    isLocationOccupied(rightArray, playerBoard.shipPlacements) === false
  ) {
    DOM().display(rightArray);
    right = true;
  }
  if (
    leftArray !== null &&
    isLocationOccupied(leftArray, playerBoard.shipPlacements) === false
  ) {
    DOM().display(leftArray);
    left = true;
  } 
  if ( up === false && down === false && left === false && right === false) {
    infoText().noOption();
    return false;
  }
}

function displayNextShip(id) {
  let shipDiv = document.createElement('div');
  shipDiv.setAttribute("id", id.slice(1));
  shipDiv.setAttribute("class", "ship shake");
  document.querySelectorAll(".empty")[1].appendChild(shipDiv);
  document.querySelector(id).setAttribute("draggable", "true");
}

const DOM = () => {
  function display(coordinateArray) {
    for (let i = 1; i < coordinateArray.length; i++) {
      let gridItem = document.querySelector("." + coordinateArray[i]);
      gridItem.classList.add("possible");
    }
    addDirectionListener(coordinateArray);
  }

  function removeDisplay() {
    let gridItems = document.querySelectorAll(".playerStart");
    gridItems.forEach((gridItem) => {
      gridItem.classList.remove("possible", "taken");
    });
  }

  function addDirectionListener(coordinateArray) {
    for (let i = 0; i < coordinateArray.length; i++) {
      let gridItem = document.querySelector("." + coordinateArray[i]);
      gridItem.addEventListener("click", (e) => {
        if (e.target.id === currentShip.id.slice(1)) {
          return
        }
        handle(coordinateArray);
      });
    }
  }

  function handle(coordinateArray) {
    removeAnimation(document.querySelector("." + coordinateArray[0]));
    for (let i = 0; i < coordinateArray.length; i++) {
      playerBoard.shipPlacements.push(coordinateArray[i]);
    }
    direction(coordinateArray);
    removeDragShip(coordinateArray[0]);
    removeDisplay();
    cloneDiv();
    currentShip.shipCounter++;
    dragDropController(currentShip.shipCounter);
  }

  function removeAnimation(ship) {
    ship.classList.remove("shake");
  }

  function direction(arr) {
    for (let i = 0; i < arr.length; i++) {
      let gridItem = document.querySelector("." + arr[i]);
      gridItem.classList.add("ship");
    }
  }
  // removes all event listeners with anonymous fnc in addDirectionListener
  function cloneDiv() {
    const sourceElement = document.querySelector(".playerPickBoard");
    const destination = document.getElementById("addClone");
    const copy = sourceElement.cloneNode(true);
    destination.appendChild(copy);
    destination.removeChild(document.querySelector(".playerPickBoard"));
  }

  function removeDragShip(id) {
    let ship = document.getElementById(id);
    ship.removeChild(ship.firstChild);
  }

  return { display, removeDisplay };
};

function addShipLocations() {
  playerBoard.myShips[0].location = playerBoard.shipPlacements.slice(0, 2);
  playerBoard.myShips[1].location = playerBoard.shipPlacements.slice(2, 5);
  playerBoard.myShips[2].location = playerBoard.shipPlacements.slice(5, 8);
  playerBoard.myShips[3].location = playerBoard.shipPlacements.slice(8, 12);
  playerBoard.myShips[4].location = playerBoard.shipPlacements.slice(12, 17);
}

export { dragDropController, addShipLocations, displayNextShip }