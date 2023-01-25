import { createBoard } from "./helpers/createBoard";
import { Ship } from "./ShipFactory";

const Gameboard = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let board = createBoard([], rows, columns);
  let missedAttacks = [];
  let myShips = [
    { name: "destroyer", ship: Ship(2, 0), location: [] },
    { name: "submarine", ship: Ship(3, 0), location: [] },
    { name: "cruiser", ship: Ship(3, 0), location: [] },
    { name: "battleship", ship: Ship(4, 0), location: [] },
    { name: "carrier", ship: Ship(5, 0), location: [] },
  ];
  let shipPlacements = [];
  const receiveAttack = (coordinates) => {
    for (let i = 0; i < shipPlacements.length; i++) {
      if (coordinates === shipPlacements[i]) {
        return true;
      }
    }
    missedAttacks.push(coordinates);
    return false;
  };
  const allShipsSunk = () => {
    let sunkShips = 0;
    for (let i = 0; i < 5; i++) {
      if (myShips[i].ship.isSunk()) {
        sunkShips++;
      }
    }
    if (sunkShips === 5) {
      return true;
    } else return false;
  };
  return { board, shipPlacements, myShips, missedAttacks, receiveAttack, allShipsSunk };
};

const fakePlayerGameboard = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let board = createBoard([], rows, columns);
  let missedAttacks = [];
  let myShips = [
    { name: "destroyer", ship: Ship(2, 0), location: ['A1', 'A2'] },
    { name: "submarine", ship: Ship(3, 0), location: ['B2', 'B3', 'B4'] },
    { name: "cruiser", ship: Ship(3, 0), location: ['D4', 'D5', 'D6'] },
    { name: "battleship", ship: Ship(4, 0), location: ['E2', 'E3', 'E4', 'E5'] },
    { name: "carrier", ship: Ship(5, 0), location: ['J5', 'J6', 'J7', 'J8', 'J9'] },
  ];
  let shipPlacements = ['A1', 'A2', 'B2', 'B3', 'B4', 'D4', 'D5', 'D6', 'E2', 'E3', 'E4', 'E5', 'J5', 'J6', 'J7', 'J8', 'J9'];
  const receiveAttack = (coordinates) => {
    for (let i = 0; i < shipPlacements.length; i++) {
      if (coordinates === shipPlacements[i]) {
        return true;
      }
    }
     missedAttacks.push(coordinates);
     return false;
   };
  const allShipsSunk = () => {
    let sunkShips = 0;
    for (let i = 0; i < 5; i++) {
      if (myShips[i].ship.isSunk()) {
        sunkShips++;
      }
    }
    if (sunkShips === 5) {
      return true;
    } else return false;
  };
  return {
    board,
    shipPlacements,
    myShips,
    missedAttacks,
    receiveAttack,
    allShipsSunk,
  };
};

export { Gameboard, fakePlayerGameboard };