const Board = () => {
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function createBoard() {
  let board = [];
  for (let i = 0; i < 10; i++) {
    board[i] = [];
    for (let j = 0; j < 10; j++) {
      board[i][j] = rows[i] + columns[j];
    }
  }
  return board;
}
  return { createBoard, rows, columns }
}

export { Board };