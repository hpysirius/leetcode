var combinationSum = function(candidates, target) {
    let res = [];
    let temp = [];
    helper(res, temp, candidates, target, 0);
    return res;
};

const helper = (res, temp, candidates, target, start) => {
    if(target === 0) {
        res.push([...temp]);
        return res;
    }
    for(let i = start; i < candidates.length; i++){
        if(candidates[i] <= target){
            temp.push(candidates[i]);
            helper(res, temp, candidates, target - candidates[i], i);
            temp.length--;
        }
    }
}

console.log(combinationSum([10,1,2,7,6,1,5], 7));