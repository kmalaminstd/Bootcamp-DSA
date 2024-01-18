class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    // adding item at the end of the stack

    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
    }
    

    pop(){
        if(this.length === 0) return undefined

        let temp = this.top
        this.top = temp.next
        temp.next = null
        this.length--
        return temp

    }

    peek(){
        const temp = this.pop()
        this.push(temp)
        return temp
    }
}

const stack = new Stack(2)
stack.push(3)
console.log(stack.peek());
console.log(stack);

// stack = LIFO (Last In First Out)