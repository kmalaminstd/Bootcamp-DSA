// # Exercise-4(what will be the output? it May require if condition inside loop)-4

// Print out all even numbers between 1 and 100. Write two solutions: one with a while loop and one with a for loop.


// ####### solution 1 even number with for loop
for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}


// ####### solution 2 even number with while loop

let num = 1
while(num <= 100){
    if(num % 2 === 0){
        console.log(num);
    }
    num++
}