// # Exercise-5(Run loop and add $ in each repetition)-4

function repeat(num){

    

    for(let i = 1; i <= num; i++){

        let result = "$".repeat(i)
        console.log(result);
    }

    
    // return result
}

repeat(3)

// <!--
// $
// $$
// $$$ -->

// console.log(repeat(5));

// <!--
// $
// $$
// $$$
// $$$$
// $$$$$ -->
