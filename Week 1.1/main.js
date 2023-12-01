const symbol = Symbol('Address')
console.log(symbol);

// while loop

let i = 0;
while(i <= 10){
    console.log(i);
    i++
}

// for of loop

const arr = ['almin', 20, 'pabna']

for(let elm of arr){
    console.log(elm);
}

// object looping

// for object looping for in loop will be used

const obj = {
    name: "KM AL-AMIN",
    district: "Pabna"
}
console.log("name" in obj);
for(let elm in obj){
    console.log(elm);
    console.log(obj[elm]);
}