// Gameboard display
function displayReady() {
  document.querySelector(".startDiv").style.display = "block";
  document.querySelector(".modal").style.opacity = "0.5";
}

function displayGame() {
  document.querySelector(".startDiv").style.display = "none";
  document.querySelector(".modal").style.opacity = "1";
  document.querySelector(".gameInfo").style.display = "flex";
}

function displayPick() {
  document.querySelector(".startDiv").style.display = "none";
  document.querySelector(".modal").style.opacity = "1";
}

const showGameBoards = () => {
  document.querySelector(".gameContent").style.display = "block";
};

function hidePickBoard() {
  document.querySelector(".pickShips").style.display = "none";
}

function clearPickBoard() {
  document.querySelector(".playerPickBoard").innerHTML = "";
}

function clearGameBoards() {
  document.querySelector("#playerBoard").innerHTML = "";
  document.querySelector("#computerBoard").innerHTML = "";
}

function hideGameBoards() {
    document.querySelector(".gameContent").style.display = "none";
}

function showPickBoard() {
    document.querySelector(".pickShips").style.display = "block";
}

// health divs
function restartHealthDivs() {
  document.querySelector("#carrierHealthPlayer").innerHTML = "5/5";
  document.querySelector("#battleshipHealthPlayer").innerHTML = "4/4";
  document.querySelector("#cruiserHealthPlayer").innerHTML = "3/3";
  document.querySelector("#submarineHealthPlayer").innerHTML = "3/3";
  document.querySelector("#destroyerHealthPlayer").innerHTML = "2/2";

  document.querySelector(".carrierEnemy").style.color = "gray";
  document.querySelector(".battleshipEnemy").style.color = "gray";
  document.querySelector(".cruiserEnemy").style.color = "gray";
  document.querySelector(".submarineEnemy").style.color = "gray";
  document.querySelector(".destroyerEnemy").style.color = "gray";
}

// Create game boards
// player is 'playerGrid', enemy is 'enemyGrid', start is 'playerStart'
function createBoard(location, player) {
  let gameboard = document.querySelector(location);
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  for (let i = 0; i < rows.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    makeColumns(row, rows[i], player);
    gameboard.appendChild(row);
  }
}

function makeColumns(row, letter, player) {
  for (let i = 1; i < 11; i++) {
    var cell = document.createElement("div");
    cell.classList.add(player);
    cell.classList.add(letter + i);
    cell.setAttribute("id", letter + i);
    row.appendChild(cell);
  }
}

// Attack
function displayMove(board, coordinates, boolean) {
  let target = findGridTarget(board, coordinates);
  if (boolean) {
    target.classList.remove("ship");
    target.classList.add("hit");
  } else target.classList.add("missed");
}

function findGridTarget(board, coordinates) {
  let list = document.getElementsByClassName(board + " " + coordinates);
  return list[0];
}

// Ships
// p is "playerGrid" enemy is "enemyGrid"
function displayShips(shipPlacements, p) {
  for (let i = 0; i < shipPlacements.length; i++) {
    let div = document.getElementsByClassName(p + " " + shipPlacements[i]);
    div[0].classList.add("ship");
  }
}

// Ship health
function findSunkShips(ships) {
  for (let i = 0; i < 5; i++) {
    if (ships[i].ship.isSunk()) {
      displayName(ships[i].name);
    }
  }
}

function displayName(name) {
  let div = document.getElementsByClassName(name + "Enemy");
  div[0].style.color = "red";
}

function updatePlayerHealth(ship) {
  let div = document.getElementById(ship.name + "HealthPlayer");
  let total = ship.ship.size;
  let health = total - ship.ship.hits;
  div.innerHTML = health + "/" + total;
}

// win
const winnerDisplay = (win) => {
    let div = document.querySelector('.winDisplay');
    div.style.display = 'block';
    if (win) {
        document.querySelector(".winText").innerHTML = "you win!";
    } else {
        document.querySelector(".winText").innerHTML = "all your ships have sunk";
    }
};

export {
  createBoard,
  displayShips,
  displayMove,
  findSunkShips,
  updatePlayerHealth,
  hidePickBoard,
  showGameBoards,
  displayReady,
  displayGame,
  clearGameBoards,
  clearPickBoard,
  showPickBoard,
  hideGameBoards,
  restartHealthDivs,
  winnerDisplay,
  displayPick
};
