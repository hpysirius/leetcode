/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
    let small = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight',
        'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    let decade = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    let big = ['Billion', 'Million', 'Thousand', ''];

    if(num === 0) return small[0];
    const get_part = num => {
        let res = '';
        if (num >= 100) {
            res += small[Math.floor(num / 100)] + ' Hundred ';
            num %= 100;
        }
        if (!num) return res;
        if (num >= 20) {
            res += decade[Math.floor(num / 10)] + ' ';
            num %= 10;
        }
        if (!Math.floor(num)) return res;
        res += small[Math.floor(num)] + ' ';
        return res;
    }

    let res = '';
    for (let i = 1000000000, j = 0; i > 0; i /= 1000, j++) {
        if (num >= i) {
            res += get_part(num / i) + big[j] + ' ';
            num %= i;
        }
    }
    while (res.slice(-1) === ' ') res = res.substr(0, res.length - 1);
    return res;
};

console.log(numberToWords(55868));