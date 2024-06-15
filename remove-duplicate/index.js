// const n = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const n = [1, 1, 2];

function removeDuplicates(nums) {
  const numsLength = nums.length;
  const candids = [];
  const extra = [];
  for (i = 0; i < numsLength; i++) {
    if(!candids.includes(nums[i])) {
      candids.push(nums[i])
    } else {
      extra.push('_');
    }
  }
  const result = candids.concat(extra);
  return {
    nums: result,
    k: candids.length,
  }
}

// completed in 18 minutes :)

console.log('removeDuplicates >> ', removeDuplicates(n));

module.exports = removeDuplicates;