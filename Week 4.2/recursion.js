// write a function that count 10 to 0

// iterative solution

// function countZero(num){
//     for(let i = num; i >= 0; i--){
//         console.log(i);
//     }
// }

// countZero(10)

// // // recursive solution

function countZero(num = 5){
    console.log(num);

    // must keep an eye on return
    if(num === 0) return

    // argument must be change in some extent
    countZero(num-1)
}

countZero(10)


// ============ >>>>>>>>>>>>>>>>
// // // iterative

// function sumRange(num1, num2){

//     let total = 0

//     for(let i = num2; i >= num1; i--){
//         // console.log(i);
//         total += i
//     }

//     return total
// }

// sumRange(1, 10)

// // // recursive solution

function sumRange(num1){

    

    
    if(num1 === 0) return 0
    return num1 + sumRange(num1 - 1)
   
}


console.log(sumRange(10));

function reverseStr(str){

    

}

console.log(reverseStr('hello'));
