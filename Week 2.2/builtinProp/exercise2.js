//Exercise-2:(3)
// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

// function chunkedArr(arr, size){
//     const chunked = []

//     for(let elm of arr){
//         const last = chunked[chunked.length-1]
//         if(last && last.length < size){
//             last.push(elm)
//         }else{
//             chunked.push([elm])
//         }
//     }

//     return chunked
// }

// console.log(chunkedArr([1,2,3,4,5], 2));

// function myFunction(a, b) {
//     let result;

    
//     // const getArr = chunkedArr(a.split(''), 3)
//     // console.log(getArr);

    
//     const aArr = a.split('')
//     const bArr = b.split('');

//     for(let i = aArr.length-1; i > 0; i--){
        
//         // if(i % 3 === 0 && a % 3 === 0){
//         //     aArr.splice(i+1, 0, b)
//         // }

//         // if(i % 3 === 0 && a % 3 !== 0){
//         //     aArr.splice(i-1, 0, b)
//         // }

//         // if((aArr.length - i) % 3 === 0){
//         //     aArr.splice(i -1 , 0, b)
//         // }

//         if ((aArr.length - i) % 3 === 0) {
//             // Insert 'b' into 'a' array
//             aArr.splice(i + 1, 0, ...bArr);
//           }
//     }

//     // aArr.pop()
//     console.log(aArr.join(''));
//     result = aArr.join('')
    

//     return result
// }

// console.log(myFunction('1234567', '.')) //'1.234.567'
// console.log(myFunction('abcde', '$')); //'ab$cde'
// console.log(myFunction('zxyzxyzxyzxyzxyz', 'w')); //'zwxyzwxyzwxyzwxyzwxyz'




// function myFunction(a, b) {
//     // Convert strings to arrays for easier manipulation
//     const aArray = a.split('');
//     const bArray = b.split('');
  
//     // Loop through 'a' in reverse and insert 'b' after every 3rd character
//     for (let i = aArray.length - 1; i >= 0; i--) {
//       if ((aArray.length - i) % 3 === 0) {
//         // Insert 'b' into 'a' array
//         aArray.splice(i -2, 0, ...bArray);
//       }
//     }
  
//     // Join the array back into a string and return the result
//     return aArray.join('');
//   }
  
//   // Example usage:
//   console.log(myFunction('1234567', '.')); // Output: '1.234.567'
//   console.log(myFunction('abcde', '$'));    // Output: 'ab$cde'
//   console.log(myFunction('zxyzxyzxyzxyzxyz', 'w')); // 

function myFunction(a, b){
    let result = ''
    let count = 0

    for(let i = a.length-1; i >= 0; i--){
        if(count === 3){
            result += b
            count = 0
        }
        result += a[i]
        count++
    }

    // for(let i = 0; i < a.length-1; i++){
    //     if(count === 3){
    //         result += b
    //         count = 0
    //     }
    //     if(i % 3 === 0){

    //         result += a[i]
    //     }
    //     count++
    // }

    return result.split('').reverse().join('')

    
}

console.log(myFunction('1234567', '.')); // Output: '1.234.567'
console.log(myFunction('abcde', '$'));    // Output: 'ab$cde'
console.log(myFunction('zxyzxyzxyzxyzxyz', 'w')); // Output: 'zwxyzwxyzwxyzwxyzwxyz'