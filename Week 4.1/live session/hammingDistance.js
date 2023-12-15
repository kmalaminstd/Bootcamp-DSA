
var hammingDistance = function(x, y) {
    
    let firstBinary = Number(x).toString(2).split('').reverse()
    let secondBinary = Number(y).toString(2).split('').reverse()
    let result = 0

    while(firstBinary.length > secondBinary.length){
        secondBinary.push(0)
    }

    while(firstBinary.length < secondBinary.length){
        firstBinary.push(0)
    }

    
    for(let i = 0; i < firstBinary.length; i++){
        if(Number(firstBinary[i]) !== Number(secondBinary[i])){
            result++
        }

        console.log(typeof Number(secondBinary[i]));
    }


    return result
};

console.log(hammingDistance(1, 4));