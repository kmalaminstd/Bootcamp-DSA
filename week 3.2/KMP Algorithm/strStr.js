
var strStr = function(haystack, needle) {


    let haystackLength;

    if(haystack.length === needle.length){
        haystackLength = haystack.length
    }else{
        haystackLength = haystack.length - needle.length
    }

    // console.log(haystackLength);

    if(needle === '') return -1



    if(needle.length === 1){
        haystackLength = haystack.length
    }else{
        haystackLength = haystack.length - needle.length
    }

    for(let i = 0; i <= haystackLength; i++) {
        let j = 0
        for(; j < needle.length; j++) {
            if(haystack[i+j] !== needle[j]) break
        }
        if(j === needle.length) return i
    }

    return -1


    

};

console.log(strStr("aaa", "aaa"));