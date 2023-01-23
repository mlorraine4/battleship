function findSunkShips(ships) {
    for (let i = 0; i < 5; i++) {
      if (ships[i].ship.isSunk() === true) {
        displayName(ships[i].name);
      }
    }
}

function displayName(name) {
    let div = document.getElementsByClassName(name+'Enemy');
    div[0].style.color = "red"
}

export { findSunkShips }