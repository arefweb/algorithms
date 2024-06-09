const commonPrefix = require("./index");

test('["worker", "cleaner", "carpenter"] should return er', () => {
  expect(commonPrefix(["worker", "cleaner", "carpenter"])).toBe("er");
});

test('["education", "medum", "sedur", "pedu"] should return edu', () => {
  expect(commonPrefix(["education", "medum", "sedur", "pedu"])).toBe("edu");
});

test('["flower", "flow", "flight"] should return fl', () => {
  expect(commonPrefix(["flower", "flow", "flight"])).toBe("fl");
});

test('["vrwfg", "sdf", "fhfe", "fs"] should return ""', () => {
  expect(commonPrefix(["vrwfg", "sdf", "fhfe", "fs"])).toBe("");
});
