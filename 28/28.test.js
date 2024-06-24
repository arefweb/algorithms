const strIndex = require('./index');

test('"sad" in "sadbutsad" should be 0 & 6', () => {
  expect(strIndex("sadbutsad", "sad")).toEqual([0, 6]);
});

test('"leeto" in "leetcode" should be -1', () => {
  expect(strIndex("leetcode", "leeto")).toEqual(-1);
});

test('"er" in "deeperharderstronger" should be 4 & 10 & 18', () => {
  expect(strIndex("deeperharderstronger", "er")).toEqual([4, 10, 18]);
});