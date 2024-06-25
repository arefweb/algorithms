const searchInsert = require('./index');

test('[2, 3, 5] with "4" should return 2', () => {
  expect(searchInsert([2, 3, 5], 4)).toBe(2);
});

test('[2, 3, 5] with "1" should return 0', () => {
  expect(searchInsert([2, 3, 5], 1)).toBe(0);
});

test('[2, 3, 5] with "6" should return 3', () => {
  expect(searchInsert([2, 3, 5], 6)).toBe(3);
});
