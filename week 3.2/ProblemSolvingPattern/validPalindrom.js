var isPalindrome = function(s) {
    const normalizeStr = s.replace(/[^\W_]/g, '')

    let left = 0
    let right = normalizeStr.length - 1

    while(left < right){
        if(normalizeStr[left] !== normalizeStr[right]) return false
        left++
        right--
    }

    return true
};


console.log(isPalindrome('a man, a plan , A calan: panama'));