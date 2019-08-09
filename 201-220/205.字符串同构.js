var isIsomorphic = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    if(s.length === t.length && s.length === 0) {
        return true;
    }
    let len = s.length;
    const sObj = {}, tObj = {};
    let sStr = '', tStr = '';
    for(let i = 0; i < len; i++){
        if(sObj[s[i]] === undefined){
            sObj[s[i]] = i;
        }
        if(tObj[t[i]] === undefined){
            tObj[t[i]] = i;
        }
        if(sObj[s[i]] !== tObj[t[i]]){
            return false;
        }
    }
    return true;
};