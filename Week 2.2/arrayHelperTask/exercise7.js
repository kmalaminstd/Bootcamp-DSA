// Exercise-7:(2)
// Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

// Examples:
//     hasNoDuplicates([1,2,3,1]) // false
//     hasNoDuplicates([1,2,3]) // true
// */

function hasNoDuplicates(arr) {
    return !!arr.reduce((acc, curr)=>{

        if(acc.includes(curr)){
            return false
        }

        acc.push(curr)
        
        return acc

    },[])
}
  

console.log(hasNoDuplicates([1, 2, 3, 1])); 
console.log(hasNoDuplicates([1, 2, 3]));