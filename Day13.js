//  Revision from Day12.js
// Find Missing Number from 0 to n

// using the total and expected count
// function missingOne(nums) {
//     let n = nums.length;
//     let expected = (n * (n + 1)) / 2;
//     let actual = nums.reduce((a, b) => a + b, 0);
//     return expected - actual;
// }

// let arr = [9, 2, 1, 4, 3, 7, 5, 6, 8, 10];
// console.log(missingOne(arr));

// Using Nested loop

// function MissingNumber(nums) {
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
// let arr = [0, 2, 10, 4, 9, 7, 5, 6, 8, 3];
// console.log(MissingNumber(arr));

// find the duplicate number in an given array 1 to n+1 int number

function findDuplicate(nums) {
    let slow = nums[0];
    let fast = nums[0];

    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);

    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    return slow;
}

let arr = [3, 3, 3, 3, 3];
console.log(findDuplicate(arr));