// get the count


// function log(n){

//     for(let i = 0; i < n; i++){
//         console.log(i);
//     }

// }

// log(5)

// function getCount(n){
//     let count = 0;
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){
//             console.log(i, j);
//             count++
//         }
//     }
//     console.log(count);
// }

// getCount(6)


// array and object efficiency

const obj = {
    name: 'AL-AMIN',
    "1email":  'alaminkhanstd@gmail.com'
}

console.log(obj);
console.log(obj.name)
console.log(obj["1email"]); // invalid key must be access by [] (square brackets)

// for in loop used for looping object

// == adding element O(1)
obj["district"] = "Pabna"
// == accessing element O(1)
console.log(obj);
// == deleting element 0(1)
delete obj.district 
// == searching element O(1)
console.log('name' in obj);


for(let i in obj){
    console.log(i);
    console.log(obj[i]);
}