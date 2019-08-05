var combinationSum2 = function(candidates, target) {
    let res = [];
    let temp = [];
    candidates.sort((a, b) => a - b);
    helper(res, temp, candidates, target, 0);
    return res;
};

const helper = (res, temp, candidates, target, start) => {
    if(target === 0) {
        res.push([...temp]);
        return res;
    }
    for(let i = start; i < candidates.length && candidates[i] <= target; i++){
        if(i === start || candidates[i] !== candidates[i - 1]){
            temp.push(candidates[i]);
            helper(res, temp, candidates, target - candidates[i], i + 1);
            temp.length--;
        }
    }
}
console.log(combinationSum([10,1,2,7,6,1,5], 7));