const lengthOfLastWord = require('./index');

test('"   fly me   to   the moon  " should return 4', () => {
  expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
});

test('"luffy is still joyboy" should return 6', () => {
  expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
});
