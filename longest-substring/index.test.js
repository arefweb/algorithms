const lengthOfLongestSubstring = require('./index');

test("the longest string in 'sddrfkkfg' should be 'drfk'", () => {
  expect(lengthOfLongestSubstring("sddrfkkfg")).toBe("drfk");
});

test("the longest string in 'pwwkew' should be 'wke'", () => {
  expect(lengthOfLongestSubstring("pwwkew")).toBe("wke");
});

test("the longest string in 'bbbb' should be 'b'", () => {
  expect(lengthOfLongestSubstring("bbbb")).toBe("b");
});

test("the longest string in 'zzdzaz' should be 'dza'", () => {
  expect(lengthOfLongestSubstring("zzdzaz")).toBe("dza");
});

test("the longest string in 'assdfgssabjkl' should be 'sabjkl'", () => {
  expect(lengthOfLongestSubstring("assdfgssabjkl")).toBe("sabjkl");
});

test("the longest string in 'abcdefeghij' should be 'abcdef'", () => {
  expect(lengthOfLongestSubstring("abcdefeghij")).toBe("abcdef");
});