function zConvert(s, numRows) {
  let wordCols = {};
  let current = 1;
  let dir = "asc";
  let result = "";
  for(i = 1; i <= numRows ; i++) {
    wordCols[i] = "";
  };
  for (item of s) {
    if (current === numRows && dir === "asc") {
      dir = "desc";
      wordCols[current] += item;
      current = current - 1;
      continue;
    }
    if (current === 1 && dir === "desc") {
      dir = "asc";
      wordCols[current] += item;
      current = current + 1;
      continue;
    }
    if (dir === "asc") {
      wordCols[current] += item;
      current = current + 1;
      continue;
    }
    if (dir === "desc") {
      wordCols[current] += item;
      current = current - 1;
      continue;
    }
  }
  for(i = 1; i <= numRows; i++) {
    result += wordCols[i]; 
  }
  return result;
}

console.log("zConvert >> ", zConvert("PAYPALISHIRING", 3));

module.exports = zConvert;