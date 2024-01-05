var searchRange = function(nums, target) {
    
    function findFirst(nums, target){
        // console.log(nums);
        let start = 0
        let end = nums.length - 1
        let result = -1
        // console.log(start);
        while(start <= end){
            let mid = Math.floor((start + end) / 2)
            if(nums[mid] === target){
                result = mid
                end = mid - 1
            }
            if(nums[mid] > target){
                end = mid - 1
            }else if(nums[mid] < target){
                start = mid + 1
            }
        }
        return result
    }

    function findLast(nums, target){
        let start = 0
        let end = nums.length - 1
        let result = -1

        while(start <= end){
            let mid = Math.floor((start + end) / 2)
            if(nums[mid] === target){
                result = mid
                start = mid + 1
            }
            if(nums[mid] > target){
                end = mid - 1
            }else if(nums[mid] < target){
                start = mid + 1
            }
        }
        return result
    }

    const firstRes = findFirst(nums, target)
    const lastRes = findLast(nums, target)


    return [firstRes, lastRes]


};

console.log(searchRange([5,7,7,8,8,10],8));

// === #2

var minEatingSpeed = function(piles, h) {
    let left = 1
    let right = Math.max(...piles)

    while(left < right){
        const mid = Math.floor((left+right) / 2)
        const hours = piles.reduce((acc, pile) => acc + Math.ceil(pile/mid), 0)
        if(hours > h){
            left = mid + 1
        }else{
            right = mid
        }
    }

    return left
};


console.log(minEatingSpeed([3,6,7,11], 8));


var threeSum = function(nums) {
    const output = []
    nums.sort((a, b) => a - b)

    for(let i = 0; i < nums.length - 2; i++){
        let left = i + 1
        let right = nums.length - 1
        if(i > 0 && nums[i] === nums[i - 1]) continue
        while(left < right){
            let total = nums[i] + nums[left] + nums[right]
            if(total === 0){
                output.push([nums[i], nums[left], nums[right]])
                while(left < right && nums[right - 1] === nums[right]){
                    right--
                }
                while(left < right && nums[left + 1] === nums[left]){
                    left++
                }
                right--
                left++
            }else if(total > 0){
                right--
            }else{
                left++
            }
        }
    }

    return output
};

console.log(threeSum([-1,0,1,2,-1,-4]));