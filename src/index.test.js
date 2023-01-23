import { Gameboard } from "./index";

test("gameboard enemy ships", () => {
  expect(Gameboard().myShips[0].name).toBe("destroyer");
});

// test("receive attack function", () => {
//   expect(Gameboard().receiveAttack('A1')).toStrictEqual(['A1']);
// });

