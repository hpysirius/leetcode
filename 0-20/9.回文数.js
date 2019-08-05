/**
        * @param {number} x
        * @return {boolean}
        */
var isPalindrome = function (x) {
    if (x < 10 && x >= 0) return true;
    const arr = x.toString().split('');
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if (arr[left] === arr[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};