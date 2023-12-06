function isArrSame(arr1, arr2){

    let result;

    if(arr1.length !== arr2.length) result = false
    for(let i = 0; i < arr1.length; i++){
        const index = arr2.indexOf(arr1[i])
        if(index === -1){
            result = false
        }else{
            arr2.splice(index, 1)

        }
        console.log(arr2);
    }

    return result

}

console.log(isArrSame([1, 2, 4, 5], [1, 4, 5, 2]));