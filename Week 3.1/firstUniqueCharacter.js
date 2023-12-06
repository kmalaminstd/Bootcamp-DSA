var firstUniqChar = function(s) {


    const hashMap = {}
    const uniqArr = []
    const strArr = s.split('')

    for(let elm of s){
        hashMap[elm] = (hashMap[elm] || 0) + 1

    }

    for(let elm in hashMap){
        if(hashMap[elm] <= 1){
            uniqArr.push(elm)
        }
    }



    return strArr.indexOf(uniqArr[0])

};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));