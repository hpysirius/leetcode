var climbStairs = function(n, a = 1, b = 2) {
    while(n-- && n > 0){
        [a, b] = [b, a + b];
    }
    return a;
 };
console.log(climbStairs(4));