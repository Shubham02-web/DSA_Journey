// Find the maximum product of two integers n-1  in an array.
// function findMaxProduct(nums) {
//     let max1 = nums[0];
//     let max2 = nums[0];
//     for (let num of nums) {
//         if (num > max1) {
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
// console.log(findMaxProduct(nums));

// 10.	Find the minimum value in a rotated sorted array.

// function minimumVal(nums) {
//     let min = Infinity;
//     for (let num of nums) {
//         if (min > num) {
//             min = num;
//         }
//     }
//     return min;
// }

// let nums = [4, 5, 6, 7, 8, 1, 2];
// console.log(minimumVal(nums));

// minimum in an array using Left Right Apporach

// function minArr(nums) {
//     let min = Infinity;
//     let left = 0;
//     let right = nums.length;
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

// let nums = [8, 15, 6, 7, 8, 9, 11];
// console.log(minArr(nums));

// 11.	Find the maximum sum subarray (Kadane’s algorithm).

// function subArr(nums) {
//     let currsum = 0;
//     let maxSum = 0;
//     for (let num of nums) {
//         currsum = currsum + num > num ? currsum + num : num;
//         maxSum = currsum > maxSum ? currsum : maxSum;
//     }
//     return maxSum;
// }

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let nums = [1];
// let nums = [5, 4, -1, 7, 8];
// console.log(subArr(nums));

// Find the sub array with the given sum positive number only

// function subArr(nums, target) {
//     let start = 0;
//     let currSum = 0;
//     for (let end = 0; end < nums.length; end++) {
//         currSum += nums[end];

//         if (currSum > target) {
//             currSum = currSum - nums[start];
//             start++;
//         }
//         if (currSum === target) {
//             return nums.slice(start, end + 1);
//         }
//     }
//     return [];
// }

// console.log(subArr([2, 4, 6], 12));

// rotate an array from K position
function rotate(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);

    return nums;
}

function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(rotate(arr, 3));