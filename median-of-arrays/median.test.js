const findMedianSortedArrays = require('./index');

test("median of [5, 9] & [8, 10] should be 8.5", () => {
  expect(findMedianSortedArrays([5, 9], [8, 10])).toBe(8.5);
});

test("median of [3, 5, 2] & [12, 4] should be 4", () => {
  expect(findMedianSortedArrays([3, 5, 2], [12, 4])).toBe(4);
});
