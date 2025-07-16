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

function maxProduct(nums) {
    let max1 = nums[0];
    let max2 = nums[0];
    for (let num of nums) {
        if (max1 < num) {
            max2 = max1;
            max1 = num;
        } else if (max2 < num) {
            max2 = num;
        }
    }

    return (max1 - 1) * (max2 - 1);
}

// let nums = [1, 5, 4, 5];
let nums = [3, 7];
console.log(maxProduct(nums));