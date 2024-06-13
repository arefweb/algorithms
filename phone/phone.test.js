const letterCombinations = require('./index');

test('"24" phone combination length should be 9', () => {
  expect(letterCombinations("24")).toHaveLength(9);
});

test('"2411" phone combination length should be 9', () => {
  expect(letterCombinations("24")).toHaveLength(9);
});

test('"" phone combination length should be 0', () => {
  expect(letterCombinations("")).toHaveLength(0);
});

test('"279" phone combination length should be 48', () => {
  expect(letterCombinations("279")).toHaveLength(48);
});