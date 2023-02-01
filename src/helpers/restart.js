function restartGame() {

  player = Player();
  computer = Player();
  playerBoard = Gameboard();
  computerBoard = Gameboard();

  restartHealthDivs();

  showPickBoard();
  // player chooses their ships' location
  dragDropController(1);

}

export { restartGame }