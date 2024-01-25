
var levelOrder = function(root) {
    const queue = [root]
    const level = []

    if(!root) return []
    while(queue.length){
        let size = queue.length
        let currentLevel = []
        while(size--){
            const item = queue.shift()
            // console.log(item[]);
            currentLevel.push(item[size])
            if(item.left) queue.push(item.left)
            if(item.right) queue.push(item.right)
            // if(size === 0) break
        }
        level.push(currentLevel)
    }
    return level
    
};

console.log(levelOrder([3,9,20,null,null,15,7]));