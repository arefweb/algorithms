const quickSort = require('./index');

test('[2, 1, 0, 1, 0, 2] should return [0,0,1,1,2,2]', () => {
  expect(quickSort([2, 1, 0, 1, 0, 2])).toEqual([0, 0, 1, 1, 2, 2]);
});
