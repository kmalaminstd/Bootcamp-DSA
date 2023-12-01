// #1

let num = 1;

while (num <= 10) {
    console.log(num);
    num += 2;
}

// #2

let num1 = 1

while (num1 <= 20) {
    if (num1 % 4 === 0) {
        console.log(num1);
    }
    num1++;
}

// #3

// this will be an infinity loop
// let num3 = 100;
// while(num3 < 150) {
//     console.log(num3 + 1);
//     num3--;
// }

// #4

// printing even number between 1 to 100 using while loop & for loop

// with while loop

let firstNum = 1

while(firstNum <= 100){
    
    if(firstNum % 2 === 0){
        console.log(firstNum);
    }

    firstNum++
}

// with for loop 

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// #5

function repeat(num){

    for(let i = 1; i <= num; i++){

        let symbol = '$'.repeat(i)
        
        console.log(symbol);
    }

}

repeat(5)


// #6

function fizzBuzz(num){

    let result;

    for(let i = 1; i <= num; i++){
        
        result = i

        if(i % 3 === 0) result = "fizz"
        if(i % 5 === 0) result = "buzz"
        if(i % 3 === 0 && i % 5 === 0) result = "fizzbuzz"
        
    
    
        console.log(result);
    }
}

fizzBuzz(100)

// #7

function myFunction(a, b){

    let count = 0

    for(let i = 0; i < b.length; i++){
        if(b[i] === a){
            count++
        }
    }

    console.log(count);

    return count

}

console.log(myFunction('m', 'how many times does the character occur in this sentence?')); //2
myFunction('h', 'how many times does the character occur in this sentence?') //4
myFunction('?', 'how many times does the character occur in this sentence?') //1
myFunction('z', 'how many times does the character occur in this sentence?') //0
