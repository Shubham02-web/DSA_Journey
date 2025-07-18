// revision

// find the sub array of given inetger numbers
// function subarr(nums, k) {
//     let start = 0;
//     let subSum = 0;
//     for (let end = 0; end <= nums.length; end++) {
//         subSum = subSum + nums[end];
//         if (subSum > k) {
//             subSum = subSum - nums[start];
//             start++;
//         }
//         if (subSum == k) {
//             return nums.slice(start, end + 1);
//         }
//     }
//     return [];
// }

// console.log(subarr([6, 3, 6], 6));

// function rotateArr(nums, k) {
//     for (let i = 0; i < k; i++) {
//         let temp = nums[nums.length - 1];
//         for (let j = nums.length - 2; j >= 0; j--) {
//             nums[j + 1] = [nums[j + 1] + nums[j]] - nums[j + 1];
//         }
//         nums[0] = temp;
//     }
//     return nums;
// }

function rotateArr(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
}

function reverse(arr, start, end) {
    while (start <= end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArr(arr, 4));