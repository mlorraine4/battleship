import { Gameboard } from "../gameboard";

describe('Gameboard', () => {
  let board;
  beforeEach(() => {
    board = Gameboard();
    board.shipPlacements.push("A1", "A2");
  })
  it('gameboard recieves attack', () => {
    expect(board.receiveAttack("A2")).toBe(true);
  })
  it('gameboard recieves a miss', () => {
    expect(board.receiveAttack('A3')).toBe(false);
  })
  it('gameboard placements', () => {
    expect(board.shipPlacements).toStrictEqual(["A1", "A2"]);
  })
})

test("gameboard enemy ships", () => {
  expect(Gameboard().myShips[0].name).toBe("destroyer");
});

