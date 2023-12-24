function sortElm(arr){

    // const sortedArr = arr.sort((a, b) => a.length - b.length)
    const sortedArr = arr.sort((a, b)=> {
        const nameA = a.toLowerCase()
        const nameB = b.toLowerCase()

        if(nameA > nameB) return -1

        if(nameA < nameB) return 1

        return 0

    } )

    console.log(sortedArr);

}

// sortElm([40, 100, 1, 5, 25, 10])
sortElm(["Banana", "Orange", "Apple", "Mango"])