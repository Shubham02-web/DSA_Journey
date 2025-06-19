/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let n = nums.length - k;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                let temp = nums[j];
                nums[j] = nums[i];
                nums[i] = temp;
            }
        }
    }
    return nums[n];
};