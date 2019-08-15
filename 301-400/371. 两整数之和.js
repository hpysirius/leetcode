var getSum = function (a, b) {
    while (b) {
        let carry = (a & b) << 1; // 记录a+b的进位，直到进位为0是退出
        a = a ^ b;   //结果相加
        b = carry;  //循环
    }
    return a;
}