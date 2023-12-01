// console.log('ik');

function missingNumber(arr){
    const hashMap = {}
    let result;
    if(!arr || !Array.isArray(arr)) return undefined
    if(arr.length === 0) return 1


    const higherNumberofArr = Math.max(...arr)
    const lowerNumberofArr = Math.min(...arr)

    for(let i = lowerNumberofArr; i <= higherNumberofArr; i++){
        hashMap[i] = true
    }

    for(let elm in hashMap){
        if(!arr.includes(Number(elm))){
            result = Number(elm)
        }
    }

    return result

    
}

console.log(missingNumber([1,2,3,4,6,7,8,9,10]));
console.log(missingNumber([]));


function missingLetter(arr){
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let missedLetter;
    const startIndex = letters.indexOf(arr[0])
    for(let i = 0; i < arr.length; i++){
        if((arr[i] !== letters[startIndex + i])){
            missedLetter = letters[startIndex + i]
        }
    }
    // console.log(startIndex);
    return missedLetter
   
}

// console.log(missingLetter(['a','b','c','d','f']));
console.log(missingLetter(['e', 'f', 'h']));