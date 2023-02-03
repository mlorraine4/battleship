
function randomInt() {
  let number = Math.floor(Math.random() * 10);
  return number;
}

function randomDirection(ship, row, column, board, shipPlacements) {
  let randomNumber = Math.floor(Math.random() * 4);
  switch (randomNumber) {
    case 0:
      return moveLeft(ship, row, column, board, shipPlacements);
    case 1:
      return moveRight(ship, row, column, board, shipPlacements);
    case 2:
      return moveUp(ship, row, column, board, shipPlacements);
    case 3:
      return moveDown(ship, row, column, board, shipPlacements);
  }
}

function moveLeft(ship, row, column, board) {
  let coordinates = [];
  for (let i = 0; i < ship.size; i++) {
    coordinates[i] = board[row][column];
    column--;
  }
  return coordinates;
}

function moveRight(ship, row, column, board) {
  let coordinates = [];
  for (let i = 0; i < ship.size; i++) {
    coordinates[i] = board[row][column];
    column++;
  }
  return coordinates;
}

function moveUp(ship, row, column, board, shipPlacements) {
  let coordinates = [];
  for (let i = 0; i < ship.size; i++) {
    if (board[row] === undefined) {
      return findValidCoordinates(board, shipPlacements, ship);
    } else {
      coordinates[i] = board[row][column];
    }
    row--;
  }
  return coordinates;
}

function moveDown(ship, row, column, board, shipPlacements) {
  let coordinates = [];
  for (let i = 0; i < ship.size; i++) {
    if (board[row] === undefined) {
      return findValidCoordinates(board, shipPlacements, ship);
    } else {
      coordinates[i] = board[row][column];
    }
    row++;
  }
  return coordinates;
}

function checkCoordinates(coordinates) {
  for (let i = 0; i < coordinates.length; i++) {
    if (coordinates[i] === undefined) {
      return false;
    }
  }
  return coordinates;
}

function findValidCoordinates(board, shipPlacements, ship) {
  let coordinates;
  do {
    coordinates = checkCoordinates(
      randomDirection(ship, randomInt(), randomInt(), board, shipPlacements)
    );
  } while (
    coordinates === false ||
    isLocationOccupied(coordinates, shipPlacements)
  );
  return coordinates;
}

function isLocationOccupied(coordinates, shipPlacements) {
  for (let i = 0; i < shipPlacements.length; i++) {
    for (let j = 0; j < coordinates.length; j++) {
      if (shipPlacements[i] === coordinates[j]) {
        return true;
      }
    }
  }
  return false;
}

function randomShipLocations(board, shipPlacements, enemyShips) {
  for (let i = 0; i < enemyShips.length; i++) {
    enemyShips[i].location = findValidCoordinates(
      board,
      shipPlacements,
      enemyShips[i].ship
    );
    addLocationsToPlacements(shipPlacements, enemyShips[i]);
  }
}

function addLocationsToPlacements(shipPlacements, enemy) {
  for (let i = 0; i < enemy.location.length; i++) {
    shipPlacements.push(enemy.location[i]);
  }
}

export { randomShipLocations, randomInt, isLocationOccupied };