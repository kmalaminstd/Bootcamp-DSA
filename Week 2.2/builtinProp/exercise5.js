//Exercise-5:(3)
// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction(a, b) {

    let result ;

    if(a < b){
        result = a / b
    }else{
        result = a * b
    }
    
    return result
}
  
console.log(myFunction(10, 100)); // 0.1
console.log(myFunction(90, 45)); //4050
console.log(myFunction(8, 20)); //0.4
console.log(myFunction(2, 0.5)); //1