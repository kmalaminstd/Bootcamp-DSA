// Tree 
// BT
// BST
// Heap
// Priority Tree
// HashTable



// BST ==>> ^^

class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right =null
    }
}

// Time complexity O(n)
// 
class BST{
    constructor(){
        this.root = null
    }

    // addding or inserting a node
    // time complexity log(N)
    // time complexity O(1)
    insert(val){
        const newNode = new Node(val)
        if(this.root === null){
            this.root = newNode
            return this
        }
        let temp = this.root
        while(true){
          if(temp.val === val)return und
          if(newNode.val < temp.val){
            if(temp.left === null){
                temp.left = newNode
                return this
            }
            temp = temp.left
          }else{
            if(temp.right === null){
                temp.right = newNode
                return this
            }
            temp = temp.right
          }
        }
    }

    // if value is exists on the BST
    contains(val){
        if(this.root === null) return false
        let temp = this.root
        while(temp){
            if(val < temp.val){
                temp = temp.left
            }else if(val > temp.val){
                temp = temp.right
            }else{
                return true
            }
        }
        return false
    }

    // ===>>breadth first search
    BFS(){
      let currentNode = this.root
      let queue = [currentNode]
      let results = []
      while(queue.length){
        currentNode = queue.shift()
        results.push(currentNode.val)
        if(currentNode.left){
            queue.push(currentNode.left)
        }

        if(currentNode.right){
            queue.push(currentNode.right)
        }
      }  
      return results
    }

    // ===>>depth first search
    // 1.PreOrder
    // 2.PostOrder
    // 3.OnOrder
    DFSPreOrder(){
        let results = []
        function traverse(currentNode){
            results.push(currentNode.val)
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
        }

        traverse(this.root)
        return results
    }

    // post order
    DFSPostOrder(){
        let results = []
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            if(currentNode.right) traverse(currentNode.right)
            results.push(currentNode.val)
        }

        traverse(this.root)
        return results
    }

    // in-order
    DFSInOrder(){
        let results = []
        function traverse(currentNode){
            if(currentNode.left) traverse(currentNode.left)
            results.push(currentNode.val)
            if(currentNode.right) traverse(currentNode.right)
        }

        traverse(this.root)
        return results
    }
}

const bst = new BST()
bst.insert(10)
bst.insert(1)
bst.insert(2)
bst.insert(11)
// console.log(bst.contains(13));
console.log(bst.BFS());
console.log(bst.DFSPreOrder());
console.log(bst.DFSPostOrder());
console.log(bst.DFSInOrder());