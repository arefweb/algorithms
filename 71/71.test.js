const simplifyPath = require('./index');

test("/home/user/Documents/../Pictures should return /home/user/Pictures", () => {
  expect(simplifyPath("/home/user/Documents/../Pictures")).toEqual(
    "/home/user/Pictures"
  );
});

test("/.../a/../b/c/../d/./ should return /.../b/d", () => {
  expect(simplifyPath("/.../a/../b/c/../d/./")).toEqual("/.../b/d");
});