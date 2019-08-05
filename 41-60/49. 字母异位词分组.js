
var groupAnagrams = function (strs) {
    if (strs.length === 0) return [];
    const ans = {};
    strs.forEach(item => {
        const ca = item.split('');
        ca.sort();
        const keys = Object.values(ca).join('');
        if(ans[keys]){
            ans[keys].push(item);
        }else{
            ans[keys] = [item];
        }
    });
    return Object.values(ans);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));