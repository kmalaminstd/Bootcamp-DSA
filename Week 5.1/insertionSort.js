

function insertionSort(arr){
    
    let currentValue;

    for(let i = 1; i < arr.length; i++){
        currentValue = arr[i]

        for(let j = i - 1; i >= 0 && arr[j]; j--){
            arr[j + 1] = arr[j]
        }
        arr[i+1] = currentValue
    }
    
    console.log(arr);


}

insertionSort([2, 1, 9, 7, 6, 4])