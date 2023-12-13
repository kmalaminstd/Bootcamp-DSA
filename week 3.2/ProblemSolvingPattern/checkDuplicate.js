
function areThereDuplicate(arr){

    let left = 0

    while(left < arr.length){
        if(arr[left] === arr[left + 1]) return true
        left++    
    }

    return false

}

console.log(areThereDuplicate([1,1,1,1,1,2]));
console.log(areThereDuplicate([]));
console.log(areThereDuplicate([-2,-1,0,1, 2]));
