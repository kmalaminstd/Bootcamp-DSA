

// time complexity O(n)
// space complexity O(n)

function countLet(str){

    const hasMap = {}
    const normalizeStr = str.toLowerCase()
    // console.log(normalizeStr);

    // looping the object and ignore any space
    for(let i = 0; i < normalizeStr.length; i++){
        const char = normalizeStr[i]
        if(char === " ") continue

        // ternary
        // char in hasMap ? hasMap[char] = hasMap[char] + 1 : hasMap[char] = 1

        hasMap[char] = (hasMap[char] || 0) + 1


        // if(char in hasMap){
        //     // check the element exist on the object incemease the existent count value
        //     hasMap[char] = hasMap[char] + 1
        // }else{
        //     // if element not present assign value 1
        //     hasMap[char] = 1
        // }
    }
    
    return hasMap
}

console.log(countLet('He llo'));



// ========= Problem Algorithm of checking existence ============ //



//  ==> way of solve #1

// space complexity O(1)
// time complexity O(n^2)


function isElementExists(arr1, arr2){
    let exists = false
    for(let elm of arr1){
        if(arr2.includes(elm)){
            exists = true
            break
        }
    }
    return exists
}

console.log(isElementExists(['a', 'b', 'c'],[1,2,3,'z']));

const age = 15

if(age <= 20){
    console.log('Accept for volte');
}else{
    console.log("Not accepted");
}

//  ==> way of solve #2

// time complexity O(n)
// space complexity O(n)
function isElementExistsTwo(arr1, arr2){
    let frequencyCounter = {}

    for(let elm of arr1){
        frequencyCounter[elm] = true
    }

    for(let elm of arr2){
        console.log(elm);
        if(elm in frequencyCounter){
            return true
        }
    }

    
    console.log(frequencyCounter);

}

console.log(isElementExistsTwo(['a', 'b', 'c'],[1,2,3,'a']));