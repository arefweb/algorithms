const threeSum = require('./index.js');

test("[-1, 0, 1, 2, -1, -4] should give [ [ -1, 0, 1 ], [ -1, -1, 2 ] ]", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
    [-1, 0, 1],
    [-1, -1, 2],
  ]);
});

test("[0, 0, 0] should give [ [0, 0, 0] ]", () => {
  expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
});

test("[1, 5, -2, 0, -1, -3] should give [ [ -1, 0, 1 ], [ -3, -2, 5 ] ]", () => {
  expect(threeSum([1, 5, -2, 0, -1, -3])).toEqual([
    [-1, 0, 1],
    [-3, -2, 5],
  ]);
});