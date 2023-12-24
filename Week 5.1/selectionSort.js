function selectionSort(arr){

    for(let i = 0; i < arr.length; i++){
        let lowest = i 

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j
            }
        }

        if(i !== lowest){
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }

    }
    
    console.log(arr);

}

selectionSort([1, 5, 2, 9, 6, 10, 8])