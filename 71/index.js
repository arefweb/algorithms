function simplifyPath(str) {
  str = str.replaceAll("...", "3dots");
  str = str.replaceAll("/..", "~~");
  str = str.replaceAll("..", "");
  str = str.replaceAll(".", "");
  str = str.replaceAll("3dots", "...");
  const m = str
    .split("/")
    .filter((item) => item && !item.includes("~~"))
    .join("/");
  return "/".concat(m);
}

const path = "/.../a/../b/c/../d/./";

console.log(simplifyPath(path));

module.exports = simplifyPath;