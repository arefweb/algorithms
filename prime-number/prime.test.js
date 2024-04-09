const checkPrime = require('./index');

test('62 is NOT a prime number, so false', () => {
  expect(checkPrime(62)).toBeFalsy();
});

test("73 IS a prime number, so true", () => {
  expect(checkPrime(73)).toBeTruthy();
});