function findSunkShips(ships) {
    for (let i = 0; i < 5; i++) {
      if (ships[i].ship.isSunk()) {
        displayName(ships[i].name);
      }
    }
}

function displayName(name) {
    let div = document.getElementsByClassName(name+'Enemy');
    div[0].style.color = "red"
}

function updatePlayerHealth(ship) {
  let div = document.getElementById(ship.name + "HealthPlayer");
  let total = ship.ship.size;
  let health = total - ship.ship.hits;
  div.innerHTML = health + "/" + total;
}

export { findSunkShips, updatePlayerHealth }