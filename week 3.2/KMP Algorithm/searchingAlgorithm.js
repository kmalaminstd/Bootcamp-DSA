// ============== >>> Binary Search


function searchElmIndex(arr, searchElm){

    let lowPoint = 0
    let highPoint = arr.length

    while(lowPoint <= highPoint){
        let midPoint = Math.floor(lowPoint + highPoint / 2)
        let midValue = arr[midPoint]

        if(midValue === searchElm) return midPoint
        if(searchElm > midValue){
            lowPoint = midPoint + 1
            highPoint = midPoint - 1
        }else{
            highPoint = midPoint - 1
        }
    }

    // console.log(lowPoint);
    return lowPoint

}

console.log(searchElmIndex([1, 3 ,5 ,7 , 9, 10], 10));