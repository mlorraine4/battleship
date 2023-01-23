
function findCoordinate(shipPlacements) {
    for (let i=0; i < shipPlacements.length; i++) {
        displayShip(shipPlacements[i]);
    }
}

function displayShip(coordinate) {
    let div = document.getElementsByClassName('playerGrid ' + coordinate);
    div[0].classList.add('ship');
}

export { findCoordinate }