/*
Bonus Exercise - Number won't be counted
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Max'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Max']
*/

var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Max'}]

function extractValue(arr, key) {

    return arr.reduce((acc, curr)=>{

        acc.push(curr[key])
        
        return acc
    },[])


}

console.log(extractValue(arr, 'name')); // ['Elie', 'Tim', 'Matt', 'Max']