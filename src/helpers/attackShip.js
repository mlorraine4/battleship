function findShip(coordinates, myShips) {
  for (let i = 0; i < myShips.length; i++) {
    for (let j = 0; j < myShips[i].location.length; j++) {
      if (myShips[i].location[j] === coordinates) {
        return myShips[i];
      }
    }
  }
}

function attackShip(myShip) {
  myShip.ship.hits = myShip.ship.hit();
  return myShip.ship.hits;
}

export { findShip, attackShip };