const products = [
    {

        name: "dress", price: 600
    },
    {name: 'cream', price: 60},
    {name: "book", price: 200},
    {
        name: "Bottle", price: 50
    },
    {name: 'BedSheet', price: 350}
]

const filterdProd = products.filter(prod => prod.price >= 100)
const saleProd = filterdProd.map((prod)=>{
    prod.price = prod.price / 2
    return prod
})

const arrChainning = products.filter(prod => prod.price >= 100).map((prod)=>{
    prod.price = prod.price / 2
    return prod
}).reduce((acc, curr, index, arr)=>{

    if(index === arr.length-1){

        return acc + curr.name + '-' + curr.price
    }else{
        return acc + curr.name + '-' + curr.price + ', '
    }


}, "Discount Product:")

console.log(arrChainning)