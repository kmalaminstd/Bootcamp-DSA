// Exercise-6:(5)
// For each of the exercises below, assume you are starting with the following people array.

let people = ["samim", "Anis", "Adnan", "Karim"];
// 1.Using a loop, iterate through this array and console.log all of the people one by one.

for(let elm of people){
    console.log(elm);
}

// 2.Write the command to remove "samim" from the array.

people.shift()
console.log(people);

// 3.Write the command to remove "Karim" from the array.
people.pop()
console.log(people);

// 4.Write the command to add "Ifat" to the front of the array.
people.unshift('Ifat')
console.log(people);

// 5.Write the command to add your name to the end of the array.
people.push('AL-AMIN')
console.log(people);

// 6.Using a loop, iterate through this array and after console.logging "Anis", exit from the loop.
for(let elm of people){
    if(elm === 'Anis'){
        console.log(elm);
        break
    }
}


// 7.Write the command to make a copy of the array using slice. The copy should NOT include "Anis" or "Ifat".
const slicedArr = people.slice(2, people.length)
console.log(slicedArr);

// 8.Write the command that gives the indexOf where "Anis" is located.
const anisIndexOf = people.indexOf('Anis')
console.log(anisIndexOf);

// 9.Write the command that gives the indexOf where "Foo" is located (this should return -1).
const fooIndex = people.indexOf('Foo')
console.log(fooIndex);

// 10.Redefine the people variable with the value you started with. Using the splice command, remove "Adnan" from the array and add "Elizabeth" and "Bob". Your array 1.should look like this when you are done ["samim", "Anis", "Elizabeth", "Bob", "Karim"].
people.splice(2,2, "Elizabeth", "Bob", "Karim")
people.splice(0,1, "samim")
console.log(people);

// 11.Create a new variable called withMiraz and set it equal to the people array 1.concatenated with the string of "Miraz".
const withMiraz = new Array(people.length).fill("Miraz")
console.log(withMiraz);