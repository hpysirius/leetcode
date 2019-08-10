var myAtoi = function (str) {
    str = str.replace(/(^\s*)|(\s*$)/g, "");//去掉字符串最前面的空格，中间的不用管
    var str1 = "";
    for (i = 0; i < str.length; i++) {
        if ((str.charAt(i) == "-" || str.charAt(i) == "+") && i == 0) {
            str1 = str1.concat(str.charAt(i))
        }//如果“+”“-”号在最前面
        else if (/^\d+$/.test(str.charAt(i))) {
            str1 = str1.concat(str.charAt(i))
        }//用字符串存储值
        else {
            break//直接跳出for循环
        };
    }
    if (str1 - 0 > 2147483647) {
        return 2147483647
    }                      //str-0   字符串化为数组最简单也是最常用的方法
    else if (str1 - 0 < -2147483648) {
        return -2147483648
    }
    if (isNaN(str1 - 0)) return 0//"+"/"-"这种情况,返回0
    return str1 - 0
};