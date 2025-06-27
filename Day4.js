/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Input: nums = [2,7,11,15], target = 9
// Input: nums = [3,2,4], target = 6
// Input: nums = [3,3], target = 6
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (i !== j && nums[i] + nums[j] === target) {
//                 return [i, j];
//             } else {
//                 continue;
//             }
//         }
//     }
// };
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

var addTwoNumbers = function(l1, l2) {
    let newArr = [];
    let I = 0,
        J = 0,
        carry = 0;
    while (I < l1.length || J < l2.length || carry !== 0) {
        let x = I < l1.length ? l1[I] : 0;
        let y = J < l2.length ? l2[J] : 0;
        let sum = x + y + carry;
        newArr.push(sum % 10);
        carry = Math.floor(sum / 10);
        I++;
        J++;
    }
    return newArr;
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));