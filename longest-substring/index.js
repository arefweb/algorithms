const s = "pwwkew";

function lengthOfLongestSubstring(str) {
  let temp = "";
  let selectList = [];
  for(i = 0; i < str.length; i++){
    if(temp.includes(str[i])) {
      selectList.push(temp);
      temp = temp.split(str[i])[temp.split(str[i]).length - 1] + str[i];
    } else {
      temp = temp.concat(str[i]);
      if(i === str.length - 1) {
        selectList.push(temp);
      }
    }
  }
  const sortedList = selectList.sort((a, b) => b.length - a.length);
  return sortedList[0];
}

console.log(lengthOfLongestSubstring(s));

module.exports = lengthOfLongestSubstring;