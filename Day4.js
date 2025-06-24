/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Input: nums = [2,7,11,15], target = 9
// Input: nums = [3,2,4], target = 6
// Input: nums = [3,3], target = 6
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return [i, j];
            } else {
                continue;
            }
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));