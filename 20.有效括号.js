const isValid = function (s) {
  const dis = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  // stack
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    const keys = Object.keys(dis);
    if (stack.length && keys.includes(c) && dis[c] === stack.slice(-1).toString()) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return !stack.length;
};
const res = isValid('{({[]})}');
console.log(res);
