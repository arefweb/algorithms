const isPalindrome = require('./index');

test('121 should be true', () => {
  expect(isPalindrome(121)).toBe(true);
});

test("78987 should be true", () => {
  expect(isPalindrome(78987)).toBe(true);
});

test("123 should be false", () => {
  expect(isPalindrome(123)).toBe(false);
});