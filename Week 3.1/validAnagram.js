var isAnagram = function(s, t) {
    let result = ''
    const normalizeStrA = s.replace(/[^\w]/g, '').toLowerCase()
    const normalizeStrB = t.replace(/[^\w]/g, '').toLowerCase()

    const hashMapOne = {}
    const hashMapTwo = {}


    

    for(let elm of normalizeStrA){
        hashMapOne[elm] = (hashMapOne[elm] || 0) + 1
    }

    for(let elm of normalizeStrB){
        hashMapTwo[elm] = (hashMapTwo[elm] || 0) + 1

        
    }
    
    for(let key in hashMapOne){
        
        // console.log(Object.keys(hashMapOne).length);
        
        if(hashMapOne[key] !== hashMapTwo[key] || key in hashMapOne || Object.keys(hashMapOne).length === Object.keys(hashMapTwo).length){
            result = false
        }
        // console.log(hashMapOne[key]);
        // console.log(hashMapTwo[key]);
    }
    result = true
    console.log(hashMapTwo);
    
   
    return result

};


// console.log(isAnagram('anagram', 'nagaram')); // true
// console.log(isAnagram('rat', 'car')); // false 
console.log(isAnagram('Rail safety', 'fairy tales'));