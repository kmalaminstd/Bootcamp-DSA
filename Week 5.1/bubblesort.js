
// function swapping(arr){

//     for(let i = 0; i < arr.length-1; i++){
//         let temp = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = temp
//     }

//     console.log(arr);


// }

// swapping([1, 10, 2, 20, 6, 30, 9])

function bubbleSort(arr){

    for(let i = 0; i < arr.length; i++){
        let swap = false
        for(let j = 0; j < arr.length - i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp

                swap = true
            }
        }
        if(!swap) break
    }

    console.log(arr);

}

bubbleSort([1, 10, 2, 20, 6, 30, 9])