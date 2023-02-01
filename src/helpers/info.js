const infoText = () => {
    let info = document.querySelector(".startInfo");
    function playerStart(shipName) {
        shipName = shipName.slice(1);
        info.innerHTML = "Place the " + shipName + " ship on your grid."
    }
    function pickDirection() {
        info.innerHTML = "Choose the direction of your ship."
    }
    function noOption() {
        info.innerHTML = "There are no available positions for your ship. Choose another location."
    }
    return { playerStart, pickDirection, noOption }
}

const gameInfo = () => {
    let info = document.querySelector(".gameInfo");
    function yourTurn() {
        info.innerHTML = "Your turn"
    }
    function enemyTurn() {
        info.innerHTML = "Enemy turn . . ."
    }
}

export { infoText, gameInfo }