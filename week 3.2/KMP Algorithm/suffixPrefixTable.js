


// time complexity O(m + n)
// space complexity O(n)

function buildPrefixTable(s){

    const table = [0]
    let i = 1
    let j = 0

    while(i < s.length){

        if(s[i] === s[j]){
            
            j++
            table[i] = j
            i++

        }else if(j > 0){

            j = table[j - 1]

        }else{
            table[i] = 0
            i++
        }

    }

    return table

}



function strStr(haystack, needle){

    if(needle === '') return 0
    const prefixTable = buildPrefixTable(needle)
    let i = 0
    let j = 0

    while(i < haystack.length && j < needle.length){
        if(haystack[i] === needle[j]){
            i++
            j++
        }else if(j > 0){
            j = prefixTable[j - 1]
        }else{
            i++
        }
    }


    return j === needle.length ? i - j : -1

}

console.log(strStr('aabaabaaab', 'aabaaab'));