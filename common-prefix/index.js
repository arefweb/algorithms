const strs = ["education", "medum", "sedur", "pedu"];

function commonPrefix(arr) {
  const arrStrs = arr.sort((a, b) => a.length - b.length);
  let temp = [];
  arrStrs.slice(1).forEach((item) => {
    for (i = 0; i < arrStrs[0].length; i++) {
      if (item.includes(arrStrs[0].substring(arrStrs[0].length, i))) {
        temp.push(arrStrs[0].substring(arrStrs[0].length, i));
      }
      if (item.includes(arrStrs[0].substring(0, arrStrs[0].length - i))) {
        temp.push(arrStrs[0].substring(0, arrStrs[0].length - i));
      }
    }
  });

  const uniqueItems = Array.from(new Set(temp));

  const res =
    uniqueItems
      .filter((item) => {
        return arrStrs.every((str) => str.includes(item)) && item.length > 1;
      })
      .sort((a, b) => b.length - a.length)[0] ?? "";

  return res;
}

// completed in 3 hours.

console.log("results >> ", commonPrefix(strs));

module.exports = commonPrefix;