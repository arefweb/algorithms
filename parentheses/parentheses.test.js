const isValid = require('./index');

test('"([]){[]}" should be true', () => {
  expect(isValid("([]){[]}")).toBeTruthy();
});

test('"([]){[]}}" should be false', () => {
  expect(isValid("([]){[]}}")).toBeFalsy();
});

test('"{{()[()]}()}" should be true', () => {
  expect(isValid("{{()[()]}()}")).toBeTruthy();
});

test('"([]{)}" should be false', () => {
  expect(isValid("([]{)}")).toBeFalsy();
});