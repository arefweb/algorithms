
/**
* @param {number} x
* @return {number}
*/
  var mySqrt = function (x) {
    var left = 1;
    var right = Math.floor(x / 2) + 1;
    var mid;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);

      if (mid * mid > x) {
        right = mid - 1;
      } else if (mid * mid < x) {
        left = mid + 1;
      } else {
        return mid;
      }
    }

    return right;
  };

function binarySearch(arr, item) {
  let lower = 0;
  let upper = arr.length - 1;
  while(lower <= upper) {
    let mid = Math.floor((lower + upper) / 2);
    if (arr[mid] < item) {
      lower = mid + 1;
    } else if (arr[mid] > item) {
      upper = mid - 1;
    } else {
      return mid;
    }
  }
  return -1
}

console.log('Square Root: ', mySqrt(36));

module.exports = mySqrt;