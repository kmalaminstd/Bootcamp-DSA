/*
Exercise-1:(2)
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
    //your code goes here

    return arr.reduce((acc, curr, i)=>{
        acc.push(curr * i)
        return acc
    },[])
    
}

console.log(valTimesIndex([1,2,3]));
console.log(valTimesIndex([1,-2,-3]));

