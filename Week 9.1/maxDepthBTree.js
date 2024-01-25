


var maxDepth = function(root) {
    const queue = [root]
    let depth = 0
    if(!root) return []
    while(queue.length){
        let size = queue.length
        depth++
        while(size--){
            const item = queue.shift()
            
            if(item.left) queue.push(item.left)
            if(item.right) queue.push(item.right)
            
        }
        
    }
    return depth   
};

console.log(maxDepth([3,9,20,null,null,15,7]));