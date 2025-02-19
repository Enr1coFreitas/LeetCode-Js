/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let values = nums1.concat(nums2);
    values = [...values].sort((a, b) => a - b);
    const half = Math.floor(values.length / 2);
    return (values.length % 2
        ? values[half]
        : (values[half - 1] + values[half]) / 2
    );
};