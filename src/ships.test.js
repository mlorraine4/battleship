import { Ship } from "./ships";

test("hit counter", () => {
  expect(Ship(3,0).hit()).toBe(1);
});

test("is not sunk", () => {
  expect(Ship(3, 2).isSunk()).toBe(false);
});

test("is sunk", () => {
  expect(Ship(3,3).isSunk()).toBe(true);
});
