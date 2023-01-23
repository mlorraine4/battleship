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
  console.log(myShip.ship.hits);
}

function upateHealth(ship) {
    let div = document.getElementById(ship.name + 'HealthPlayer');
    let total = ship.ship.size;
    let health = total - ship.ship.hits;
    div.innerHTML = health + '/' + total;
}

export { findShip, attackShip, upateHealth };