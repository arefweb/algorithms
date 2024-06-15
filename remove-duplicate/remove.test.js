const removeDuplicates = require('./index');

test('[0, 1, 1, 3, 4, 4, 6, 6, 7, 9, 9] should return k=7', () => {
  expect(removeDuplicates([0, 1, 1, 3, 4, 4, 6, 6, 7, 9, 9]).k).toBe(7);
});

test("[1, 1, 2] should return k=2", () => {
  expect(removeDuplicates([1, 1, 2]).k).toBe(2);
});