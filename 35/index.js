const n = [1, 3, 4, 7];
const t = 5;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
  let index;
  for(i=0; i < nums.length; i++) {
    const item = nums[i];
    if (item === target) {
      index = i;
      break;
    }
    if (i > 0 && target < item) {
      index = i;
      break;
    }
    if (i === 0 && target < item) {
      index = 0;
      break;
    }
    if(i === nums.length - 1) {
      index = i + 1;
    }
  }
  return index;
};

// completed in 30 minutes

console.log('search insert: ', searchInsert(n, t));

module.exports = searchInsert;