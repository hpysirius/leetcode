/**
         * @param {string} s
         * @param {number} numRows
         * @return {string}
         */
var reverse = function (x) {

    var res = +((Math.abs(x) + '').split('').reverse().join(''));
    var r = x < 0 ? -res : res;
    if (r >= (Math.pow(2, 31) - 1) || r <= Math.pow(-2, 31)) {
        return 0;
    }
    return r;
};