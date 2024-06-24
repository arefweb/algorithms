
/*
* @param {string} haystack
* @param {string} needle
* @return {number}
*/

const h = "mylifemychoice";
const n = "my";

function strIndex(haystack, needle) {
  const indexes = [];
  let temp = haystack;
  while(temp.length > 0) {
    const lastIndex = indexes[indexes.length - 1] !== undefined ? 
    indexes[indexes.length - 1] + needle.length : 0;
    const i = temp.indexOf(needle);
    if(i !== -1) {
      indexes.push(i + lastIndex);
      temp = temp.slice(i + needle.length);
    } else {
      temp = ''
    }
  }
  if(indexes.length === 0) return -1;
  return indexes;
};

// completed in 50 minutes

console.log("first occurence index: ", strIndex(h, n));

module.exports = strIndex;
