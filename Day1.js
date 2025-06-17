function constantTime(arr) {
    return arr[0];
}

function maxOfArray(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function hasDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return false;
}
let arr1 = [1, 7, 3, 6, 6, 7];
console.time("01 log time ");
// console.log(constantTime(arr1));
console.log(maxOfArray(arr1));
// console.log(hasDuplicate(arr1));
console.timeEnd("01 log time ");