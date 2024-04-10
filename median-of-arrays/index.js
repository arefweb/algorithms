// nums1 , nums2 : number[]
// @return : number
function findMedianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2];
    merged.sort((a, b) => a - b);
    if (merged.length % 2 !== 0) {
      const midIndex = ((merged.length - 1) / 2);
      return merged[midIndex];
    } else {
      const mid2 = (merged.length / 2);
      const mid1 = mid2 - 1;
      return (merged[mid1] + merged[mid2]) / 2;
    }
};

console.log(findMedianSortedArrays([1, 2], [3, 4]));

module.exports = findMedianSortedArrays;