const nums = [-1, 0, 1, 2, -1, -4];

function threeSum(inputNums) {
  const accumulator = [];
  inputNums.slice(0, -2).forEach((numItem, index) => {
    const examineArr = inputNums.slice(1 + index);

    examineArr.forEach((num, id, array) => {
      const numsToAdd = [];

      array.slice(1 + id).forEach((item) => {
        if (num + item + numItem === 0) {
          numsToAdd.push(num, item);
        }
      });

      const sum = numItem + numsToAdd[0] + numsToAdd[1];
      if (sum === 0) {
        const itemToPush = [numItem, numsToAdd[0], numsToAdd[1]].sort(
          (a, b) => a - b
        );
        accumulator.push(itemToPush);
      }
    });
    
  });
  const result = accumulator
    .map((item) => {
      return item.join();
    })
    .reduce((acc, item) => {
      return acc.includes(item) ? acc : [...acc, item];
    }, [])
    .map((item) => item.split(",").map((n) => Number(n)));
  return result;
}

// completed in 3 hours

console.log("3sum result: ", threeSum(nums));

module.exports = threeSum;
