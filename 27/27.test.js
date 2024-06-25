const removeElement = require('./index');

test('[3,2,2,3] with "3" should return [2, 2, _, _]', () => {
  expect(removeElement([3, 2, 2, 3], 3).res).toEqual([2, 2, '_', '_']);
});

test('[4, 5, 1, 3, 1, 1] with "1" should return [4, 5, 3, _, _, _]', () => {
  expect(removeElement([4, 5, 1, 3, 1, 1], 1).res).toEqual([
    4,
    5,
    3,
    "_",
    "_",
    "_",
  ]);
});
