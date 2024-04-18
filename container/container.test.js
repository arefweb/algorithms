const maxContainer = require('./index');

test("output of [3, 2, 5, 1, 8] should be 12", () => {
  expect(maxContainer([3, 2, 5, 1, 8])).toBe(12);
});

test("output of [1,8,6,2,5,4,8,3,7] should be 49", () => {
  expect(maxContainer([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
});


test("output of [1,1,1,3,2,1,1,1,1,1] should be 9", () => {
  expect(maxContainer([1, 1, 1, 3, 4, 1, 1, 1, 1, 1])).toBe(9);
});

test("output of [1,1,1,3,4,1,1,1,1,1] should be 12", () => {
  expect(maxContainer([1, 1, 1, 3, 10, 1, 1, 1, 1, 1])).toBe(9);
});