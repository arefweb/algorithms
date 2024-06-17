const divide = require('./index');

test('10 / 3 should be 3', () => {
  expect(divide(10, 3)).toBe(3);
});

test("7 / -3 should be -2", () => {
  expect(divide(7, -3)).toBe(-2);
});

test("-11 / -3 should be 3", () => {
  expect(divide(-11, -3)).toBe(3);
});