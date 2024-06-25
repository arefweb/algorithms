const d = [1, 2, 9];

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  const plusOne = (Number(digits.join("")) + 1).toString().split("");
  return plusOne.map((item) => Number(item));
}

// completed in 5 minutes

console.log('plus one: ', plusOne(d));

module.exports = plusOne;