
const reverse = require("./index");

test('-5420 should return -245', () => {
  expect(reverse(-5420)).toBe(-245);
});

test("4580 should return 854", () => {
  expect(reverse(4580)).toBe(854);
});
