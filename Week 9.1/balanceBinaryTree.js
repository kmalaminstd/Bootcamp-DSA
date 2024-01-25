
const getDepth = function(root){
    if(!root) return 0
    return 1 + Math.max(getDepth(root.left), getDepth(root.right))
}

var isBalanced = function(root) {
    if(!root) return true
    const leftDepth = getDepth(root.left)
    const rightDepth = getDepth(root.right)
    const balanced = Math.abs((leftDepth - rightDepth)) <= 1
    return balanced && isBalanced(root.left) && isBalanced(root.right)

};