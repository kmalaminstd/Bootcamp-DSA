/*
Exercise-3:(2)
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['obaydullah','Karim', 'miraz', 'kawsar', 'ruhi',     udemy']) // ["oh", "km", "mz", "kr", 'ri', 'uy']
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
    //write code here
    return arr.reduce((acc, curr, i)=>{
        acc.push(curr[0]+curr[curr.length-1]) 
        return acc
    },[])
}

console.log(showFirstAndLast(['obaydullah','Karim', 'miraz', 'kawsar', 'ruhi', 'udemy']))
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));