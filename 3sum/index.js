// const nums = [-1, 0, 1, 2, -1, -4];
// const nums = [0, 1, 1];
// const nums = [0, 0, 0];
const nums = [1, 5, -2, 0, -1, -3];

function threeSum(inputNums) {
  const accumulator = [];
  inputNums.slice(0, -2).forEach((numItem, index) => {
    const examineArr = inputNums.slice(1 + index);
    for (i = 0; i < examineArr.length; i++) {
      const numsToAdd = examineArr.slice(i, 2 + i);
      const sum = numItem + numsToAdd[0] + numsToAdd[1];
      if (sum === 0) {
        accumulator.push([numItem, numsToAdd[0], numsToAdd[1]]);
      }
    }
  });
  return accumulator;
}

console.log("3sum result: ", threeSum(nums));

module.exports = threeSum;
