// stair pattern ========== >>>>>>>

function stariPatt(n){

    let pattern = ''
    
    for(let row = 0; row < n; row++){
        for(let column = 0; column < n; column++){
            if(column <= row){
                pattern += '#'
            }else{
                pattern += ''
            }
            
        }
        console.log(pattern);
    }

}

stariPatt(5)

//  =============>>>>>>>> pyramid pattern <<<<<<<<<<<<=========

function pyramidPatt(n){
    const midPoint = Math.floor((2 * n-1) / 2)
    console.log(midPoint);
    
    for(let row = 0; row < n; row++){
        let pattern = ''
        for(let column = 0; column < 2 * n - 1; column++){
            if(midPoint - row <= column && midPoint + row >= column){
                pattern += '#'
            }else{
                pattern += ' '
            }
        }
        console.log(pattern);
    }
}

pyramidPatt(3)