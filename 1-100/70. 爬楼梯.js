var climbStairs = function(n, a = 1, b = 2) {
    while(n-- && n > 0){
        [a, b] = [b, a + b];
    }
    return a;
 };
console.log(climbStairs(4));



// 一个长阶梯有n级，可以一次走1级，一次走2级，一共有多少种走法？
// 会爆栈 -> 调用栈随着n的增加而线性增加
// 斐波拉契数列
// 普通递归
function step(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    return step(n - 1) + step(n - 2);
  }
  // 尾递归
  function fTail(n, a = 1, b = 2) {
    if (n === 1) return a;
    return fTail(n - 1, b, a + b);
  }
  // 直接改函数内部，循环执行
  function fLoop(n, a = 1, b = 2) {
    while (n-- && n > 0) {
      [a, b] = [b, a + b];
    }
    return a;
  }
  // n = 3
  // fTail(3, 1, 2) => fTail(2, 2, 3) => fTail(1, 3, 5)
  console.log(fTail(5));
  console.log(fLoop(5));