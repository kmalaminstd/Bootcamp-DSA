
function spiralMatrix(n){
    const result = []

    let startColumn = 0
    let endColumn = n - 1
    let startRow = 0
    let endRow = n - 1
    let counter = 1

    for(let i = 0; i < n; i++){
        result.push([])
    }
    
    
    while(startColumn <= endColumn && startRow <= endRow){

        // // top row
        for(let i = startColumn; i <= endColumn; i++){
            result[startRow][i] = counter
            counter++
        }
        startRow++

        // // right column

        for(let i = startRow; i <= endRow; i++){
            result[i][endColumn] = counter
            counter++
        }
        endColumn--

        // // bottom row
        for(let i = endColumn; i >= startColumn; i--){
            result[endRow][i] = counter
            counter++
        }
        endRow--

        // // endRow

        for(let i = endRow; i >= startRow; i--){
            result[i][startColumn] = counter
            counter++
        }
        startColumn++



    }


    return result

}

console.log(spiralMatrix(3));

