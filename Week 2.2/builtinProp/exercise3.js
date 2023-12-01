//Exercise-3:(3)
// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word


function myFunction(str) {

    const letters = 'abcdefghijklmnopqrstuvwxyz'
    let result = '' ;

    for(let i = 0; i < str.length; i++){
        result += letters[letters.indexOf(str[i])+1]
    }

    return result
}


console.log(myFunction('bnchmf')); //'coding'
console.log(myFunction('bgddrd')); //'cheese'
console.log(myFunction('sdrshmf')); //'testing'