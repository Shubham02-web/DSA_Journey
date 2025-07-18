// revision

// find the sub array of given inetger numbers
function subarr(nums, k) {
    let start = 0;
    let subSum = 0;
    for (let end = 0; end <= nums.length; end++) {
        subSum = subSum + nums[end];
        if (subSum > k) {
            subSum = subSum - nums[start];
            start++;
        }
        if (subSum == k) {
            return nums.slice(start, end + 1);
        }
    }
    return [];
}

console.log(subarr([6, 3, 6], 6));