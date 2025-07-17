// revision
// function findDuplicate(nums) {
//     let temp = [];
//     let seen = new Set();
//     for (let num of nums) {
//         if (seen.has(num)) {
//             temp[temp.length] = num;
//         } else {
//             seen.add(num);
//         }
//     }
//     return temp;
// }

// function findDuplicate(nums) {
//     let slow = nums[0];
//     let fast = nums[0];
//     do {
//         slow = nums[slow];
//         fast = nums[nums[fast]];
//     } while (slow != fast);

//     slow = nums[0];
//     while (slow != fast) {
//         slow = nums[slow];
//         fast = nums[fast];
//     }
//     return slow;
// }

// let arr = [1, 2, 3, 3, 4, 5, 6, 7];

// console.log(findDuplicate(arr));

// function reverseArray(nums) {
//     let left = 0;
//     let right = nums.length - 1;
//     let temp = 0;
//     while (left < right) {
//         temp = nums[left];
//         nums[left] = nums[right];
//         nums[right] = temp;
//         left++;
//         right--;
//     }
//     return nums;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(reverseArray(arr));

// function intersection(nums1, nums2) {
//     for (let num1 of nums1) {
//         for (let num2 of nums2) {
//             if (num1 === num2) {
//                 return num1;
//                 break;
//             }
//         }
//     }
// }

// function findIntersection(nums1, nums2) {
//     nums1.sort((a, b) => a - b);
//     nums2.sort((a, b) => a - b);

//     let result = [];
//     let i = 0,
//         j = 0;
//     while (i < nums1.length && j < nums2.length) {
//         if (nums1[i] === nums2[j]) {
//             result[result.length] = nums1[i];
//             i++;
//             j++;
//         } else if (nums1[i] < nums2[j]) {
//             i++;
//         } else {
//             j++;
//         }
//     }
//     return result;
// }

// let nums1 = [4, 9, 5, 4];
// let nums2 = [9, 4, 9, 8, 4];

// console.log(intersection(nums1, nums2));
// console.log(findIntersection(nums1, nums2));

// new question
// 9.	Find the maximum product of two integers in an array.

// function maxProduct(nums) {
//     let max1 = nums[0];
//     let max2 = nums[0];
//     for (let num of nums) {
//         if (max1 < num) {
//             max2 = max1;
//             max1 = num;
//         } else if (max2 < num) {
//             max2 = num;
//         }
//     }

//     return (max1 - 1) * (max2 - 1);
// }

// let nums = [1, 5, 4, 5];
// let nums = [3, 7];
// console.log(maxProduct(nums));

// 10.	Find the minimum value in a rotated sorted array.
// function minVal(nums) {
//     let min = nums[0];
//     for (let num of nums) {
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;
// }

// let nums = [4, 5, 6, 7, 0, 1, 2];
// console.log(minVal(nums));

// minimum in an array leetcode 154

// function minimumArr(nums) {
//     let min = nums[0];
//     let left = 0;
//     let right = nums.length - 1;
//     while (left <= right) {
//         if (nums[left] < min) {
//             min = nums[left];
//         } else if (nums[right] < min) {
//             min = nums[right];
//         }
//         left++;
//         right--;
//     }
//     return min;
// }

// let nums = [1, 3, 5];
// let nums = [2, 2, 2, 0, 1];
// console.log(minimumArr(nums));

// 11.	Find the maximum sum subarray (Kadane’s algorithm).

// function maxSubArr(nums) {
//     let currSum = -Infinity;
//     let maxSum = -Infinity;
//     for (let i = 0; i < nums.length; i++) {
//         currSum = currSum + nums[i] > nums[i] ? currSum + nums[i] : nums[i];
//         maxSum = maxSum > currSum ? maxSum : currSum;
//     }
//     return maxSum;
// }

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let nums = [1];
// let nums = [5, 4, -1, 7, 8];
// console.log(maxSubArr(nums));