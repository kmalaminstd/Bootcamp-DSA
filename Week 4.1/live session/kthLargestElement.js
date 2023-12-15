
 ///////////////////// ========== UNSOLVED ==============>>>>


// // with sorted

// var findKthLargest = function(nums, k) {
    
//     const uniqArr = [...new Set(nums)]

//     const soted = uniqArr.sort((a,b)=> a - b)[1]
//     // console.log(soted);

//     return soted

//     // console.log(uniqArr);
// };


// console.log(findKthLargest([3,2,1,5,6,4], 2));



// ///////////////////



// // ======= >>>>>>> without sorted

// function secondLargestNum(arr){

//     const removedDuplicate = Array(...new Set(arr))

//     // console.log(removedDuplicate);

//     let largest = Number.NEGATIVE_INFINITY 
//     let secondLargest = Number.NEGATIVE_INFINITY

//     for(let i = 0; i < removedDuplicate.length; i++){

//         if(removedDuplicate[i] > largest){
//             secondLargest = largest
//             largest = removedDuplicate[i]
//         }else if(removedDuplicate[i] !== largest && removedDuplicate[i] > secondLargest){
//             secondLargest = removedDuplicate[i]
//         }

//     }

//     return secondLargest


// }

// console.log(secondLargestNum([3,2,3,1,2,4,5,5,6]));

// 1, 2, 3, 4, 5, 6

function kthLagestElm(arr, k){

    let removedDuplicate = arr.length > 1 ? Array(...new Set(arr)) : arr
    

    let largest = Number.NEGATIVE_INFINITY
    let indexOfHighest;


   



    for(let i = 0; i <= removedDuplicate.length; i++){
        if(removedDuplicate[i] > largest){
            largest = removedDuplicate[i] 
        }
        console.log(i);
        
    }

    for(let i = k > 2 ? k - 2 : k - 1; i > 0; i--){
        indexOfHighest = removedDuplicate.indexOf(6)
        if(removedDuplicate.length > 1){
            removedDuplicate.splice(indexOfHighest, 1)
            console.log('IK');
        }else{
            console.log('No');
        }
        
    }
    
    console.log(largest);

    return largest

}

console.log(kthLagestElm([2,1], 2));

// 1 2 3 4 5 6

// console.log(Number.NEGATIVE_INFINITY < 1);