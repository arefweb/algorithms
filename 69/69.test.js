const mySqrt = require('./index');

test('square root of 30 must be ~ 5', () => {
  expect(mySqrt(30)).toEqual(5);
});

test("square root of 36 must be 6", () => {
  expect(mySqrt(36)).toEqual(6);
});