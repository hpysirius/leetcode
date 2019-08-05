var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    const len = needle.length;
    let index = 0;
    while(index + len <= haystack.length){
        const str = haystack.slice(index, index + len);
        if(str === needle){
            return index;
        }
        index++;
    }
    return -1;
};