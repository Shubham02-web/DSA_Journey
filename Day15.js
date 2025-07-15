// Find duplicate numbers in an array containing multiple duplicates.

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
//     let frequencyArr = [];
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//         let val = nums[i];
//         if (frequencyArr[val] === undefined) {
//             frequencyArr[val] = 1;
//         } else {
//             frequencyArr[val]++;
//         }
//     }

//     for (let j = 0; j < frequencyArr.length; j++) {
//         if (frequencyArr[j] > 1) {
//             let isAdded = true;
//             for (let k = 0; k < result.length + 1; k++) {
//                 if (result[k] === j) {
//                     isAdded = false;
//                     break;
//                 }
//             }
//             if (isAdded) {
//                 result[result.length] = j;
//             }
//         }
//     }

//     return result;
// }
// let array = [3, 5, 7, 2, 3, 2];
// console.log(findDuplicate(array));

//Remove duplicates from an array in place.
// function removeDuplicate(nums) {
//     if (nums.length === 0) return 0;
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[i] !== nums[j]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//     return { count: i + 1, nums };
// }

// let arr = [1, 1, 2];
// let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicate(arr));

// 7.	Reverse an array in place.
function reversArray(nums) {
    let left = 0,
        right = nums.length - 1,
        temp = 0;
    while (left < right) {
        temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
    return nums;
}
let arr = [0, 1, 2, 3, 4, 5];
console.log(reversArray(arr));