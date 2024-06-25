const plusOne = require('./index');

test('[1, 2, 3] should become [1, 2, 4]', () => {
  expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
});

test("[1, 2, 9] should become [1, 3, 0]", () => {
  expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
});