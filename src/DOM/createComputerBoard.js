let gameboard = document.querySelector("#computerBoard");

function createCompBoard() {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  for (let i = 0; i < rows.length; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    makeColumns(row, rows[i]);
    gameboard.appendChild(row);
  }
}

function makeColumns(row, letter) {
  for (let i = 1; i < 11; i++) {
    var cell = document.createElement("div");
    cell.classList.add("compGrid");
    cell.classList.add(letter + i);
    cell.setAttribute('id', letter + i);
    row.appendChild(cell);
  }
}

export { createCompBoard };
