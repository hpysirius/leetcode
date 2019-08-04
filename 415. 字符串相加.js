var addStrings = function(num1, num2) {
    let res = '';
    let i = num1.length - 1, j = num2.length - 1;
    let curry = 0;
    while(i >= 0 || j >= 0 || curry !== 0){
        if(i >= 0) curry += num1[i--] - '0';
        if(j >= 0) curry += num2[j--] - '0';
        res += (curry%10).toString();
        curry = Math.floor(curry/10);
    }
    return res.split('').reverse().join('');
};

console.log(addStrings('128', '55'));