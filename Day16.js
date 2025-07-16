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

function reverseArray(nums) {
    let left = 0;
    let right = nums.length - 1;
    let temp = 0;
    while (left < right) {
        temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
    return nums;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));