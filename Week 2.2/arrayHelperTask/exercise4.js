/*
Exercise-4:(2)
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Samim'}, {name: 'Miraz'}, {name: 'Matt'}, {name: 'Anam'}], 'title', 'instructor') 
    
    // [{name: 'Samim', title:'instructor'}, {name: 'Miraz', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Anam', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
    //your code goes here

    return arr.reduce((acc, curr, i , arr)=>{

        acc.push(curr)
        arr[i][key] = value

        return acc
    },[])
}

console.log(addKeyAndValue([{name: 'Samim'}, {name: 'Miraz'}, {name: 'Matt'}, {name: 'Anam'}], 'title', 'instructor'));