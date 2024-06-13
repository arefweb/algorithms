const nums = "23";

function letterCombinations(digits) {
  const keyMapper = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  }
  
  const combinations = [];
  for(i=0; i < digits.length ; i++ ) {
    if (keyMapper.hasOwnProperty(digits[i])) {
      combinations.push(keyMapper[digits[i]]);
    }
  }

  const temp = [];
  for(i = 0; i < combinations.length; i++) {
    if (temp.length) {
      temp.forEach((tempItem) => {
        combinations[i].forEach((combItem) => {
          const combined = tempItem.concat(combItem);
          temp.push(combined);
        });
      });  
    } else {
      combinations[i].forEach((combItem) => {
        temp.push(combItem);
      });
    }
  }

  return temp.filter((item) => item.length >= combinations.length);
}

// completed in 4.5 hours

console.log(
  `Phone number letter combination: length(${letterCombinations(nums).length})`,
  letterCombinations(nums)
);

module.exports = letterCombinations;