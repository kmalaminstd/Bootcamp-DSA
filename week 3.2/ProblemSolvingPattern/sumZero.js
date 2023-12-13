function sumZero(arr){


    let left = 0
    let right = arr.length - 1

    // console.log(left, right);

    while(left < right){

        if(arr[left] + arr[right] === 0){
            // console.log(arr[left] , arr[right]);
            return [arr[left], arr[right]]
        }

        if(arr[left] < arr[right]){
            right--
        }

        if(arr[left] > arr[right]){
            left--
        }

        return undefined

    }

}   

console.log(sumZero([-3, -2, -1, 0, 1 ,2 , 3]));
console.log(sumZero([1, 2, 3]));