/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let nums = [];
    for (let i = 0; i < m; i++) {
        nums.push(nums1[i]);
    }
    for (let i = 0; i < n; i++) {
        nums.push(nums2[i]);
    }
    nums.sort((a, b) => a - b);
    for (let i = 0; i < m + n; i++) {
        nums1[i] = nums[i];
    }
};