const friends = [
    {
        name: 'Anna',
        books: ['Bibble', 'Harry Potter'],
        age: 21
    },

    {
        name: 'Bob',
        books: ['War and Peace', 'Romeo and Juliet'],
        age: 26
    },

    {
        name: 'Alice',
        books: ['The lord of the ring', 'The Shinning'],
        age: 18
    }

]

const allBooks = friends.reduce((acc, curr)=>{
    return [...acc, ...curr.books]
},[])

console.log(allBooks);

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

const countNames = names.reduce((allNames, name)=>{
    if(name in allNames){
        allNames[name] = allNames[name]+1
    }else{
        allNames[name] = 1
    }
    return allNames
},{})

console.log(countNames);

const people = [
    {name: "Alice", age: 21},
    {name: "Max", age: 20},
    {name: "Jane", age: 20}
]

function groupByAge(objArr, property){
    const reducedArr = objArr.reduce(( acc ,curr)=>{
        const prop = curr[property]

        if(prop in acc){
            acc[prop].push(curr)
        }else{
            acc[prop] = [curr]
        }
        
        console.log(prop);

        return acc
    },{})

    return reducedArr
}

console.log(groupByAge(people, 'age'));