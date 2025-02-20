/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counter;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            counter = num;
        }
        count += (num === counter) ? 1 : -1;
    }

    return counter;
};