/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let n = gas.length;
    // 从每个点出发
    for(let i = 0; i < n; i++) {
        let j = i;
        let remain = gas[i];
        // 当剩余的油能否达到下一个点
        while(remain - cost[j] >= 0) {
            // 减去花费的油，加上新补给的油
            remain = remain - cost[j] + gas[(j + 1) % n] ;
            // 下一个点需要取余
            j = (j + 1) % n; 
            // j 回到了 i。证明有解
            if(j === i) {
                return i;
            }
        }
    }
    return -1;
};