const n = [0, 1, 2, 2, 3, 0, 4, 2];
const v = 2;

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  const arr = [];
  const equals = [];

  nums.forEach((item, i) => {
    if(item === val) {
      equals.push('_');
    } else {
      arr.push(item);
    }
  });
  const res = arr.concat(equals);
  const k = arr.length;
  
  return {
    k,
    res,
  }
};

// completed in 20 minutes

console.log('removeElement: ', removeElement(n, v));

module.exports = removeElement;