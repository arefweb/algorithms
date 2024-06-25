const str = "   fly me   to   the moon  ";

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  const s2 = s.trim();
  let res = "";
  for (i = s2.length - 1; i >= 0; i--) {
    const item = s2[i];
    if (item === " ") {
      break;
    }
    res = item + res;
  }
  return res.length;
}

// completed in 18 minutes

console.log('length of last word: ', lengthOfLastWord(str));

module.exports = lengthOfLastWord;