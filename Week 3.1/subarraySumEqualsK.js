var subarraySum = function(nums, k) {
    const hasMap = {
        0 : 1
    }
    let sum = 0
    let result = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i] 
        // console.log(sum);
        if([sum - k] in hasMap){
            result += hasMap[sum - k]
        }

        // console.log(hasMap[sum - k]);

        hasMap[sum] = (hasMap[sum] || 0) + 1
        
    }

    console.log(result);

    console.log(hasMap);

    return result
};

console.log(subarraySum([1, 1, 1], 2));
// console.log(subarraySum([1, 2, 3], 3));