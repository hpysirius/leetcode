/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  function cartesianProduct(sets) {
    const head = sets.shift() || [];
    if (sets.length === 0) return head;

    const tailProduct = cartesianProduct(sets);
    return flatMap(
      item => flatMap(
        items => item + items,
        tailProduct
      ),
      head
    );
  }

  function flatMap(fn, array = []) {
      return [].concat(...array.map(fn));
    // return array.map(fn).flat(1);
  }
  const obj = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };
  const len = digits.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    res.push(obj[digits.charAt(i)]);
  }
  return cartesianProduct(res);
};

const res = letterCombinations('23');
console.log(res);
