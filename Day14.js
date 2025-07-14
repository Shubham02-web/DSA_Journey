// Revision

// find missing Number Among 0 to n+1

// using reduce method
// function findMissing(nums) {
//     let n = nums.length;
//     let expected = (n * (n + 1)) / 2;
//     let actual = nums.reduce((a, b) => a + b, 0);
//     return expected - actual;
// }

// using nestead loop
// function findMissing(nums) {
//     for (let i = 0; i < nums.length + 1; i++) {
//         let flag = 1;
//         for (let j = 0; j < nums.length + 1; j++) {
//             if (i === nums[j]) {
//                 flag = 0;
//             }
//         }
//         if (flag) return i;
//     }
// }
// let arr = [2, 3, 6, 4, 0, 5];
// console.log(findMissing(arr));

// find duplicate among 0 to n+1 integer only one value is duplicate

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
// let arr = [1, 2, 3, 4, 4];
// console.log(findDuplicate(arr));

// find the index which match their value to the target

// function findSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target && i !== j) return [i, j];
//         }
//     }
// }

// let arr = [0, 4, 9, 2, 8];
// console.log(findSum(arr, 12));

// Find Min And Max from an array
// function minAndMax(nums) {
//     let min = nums[0];
//     let max = nums[0];

//     for (let num of nums) {
//         if (min > num) min = num;
//         if (max < num) max = num;
//     }
//     return { min: min, max: max };
// }

// let arr = [7, 9, 47, 22, 8];
// console.log(minAndMax(arr));

// new queesttions
// 5.	Find duplicate numbers in an array containing multiple duplicates.
// function findDuplicate(nums) {
//     let result = [];
//     let seen = new Set();
//     for (let num of nums) {
//         if (seen.has(num)) {
//             result[result.length] = num;
//         } else {
//             seen.add(num);
//         }
//     }
//     return result;
// }

// Find Duplicate using freuenty

function findDuplicate(nums) {
    let freq = [];
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (freq[val] === undefined) {
            freq[val] = 1;
        } else {
            freq[val]++;
        }
    }

    for (let j = 0; j < freq.length; j++) {
        if (freq[j] > 1) {
            let isAdded = false;
            for (let k = 0; k < result.length; k++) {
                if (j == result[k]) {
                    isAdded = true;
                    break;
                }
            }
            if (!isAdded) {
                result[result.length] = j;
            }
        }
    }
    return result;
}
const arr = [1, 5, 3, 5, 1, 8];
console.log(findDuplicate(arr));