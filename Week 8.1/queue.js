// Queue = FIFO (First In First Out)
// add in stact = enqueue
// remove = dequeue

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(value){
        const newNode = new Node(value)
        this.value = value
        this.first = newNode
        this.last = newNode
        this.length = 1
    }


    // adding item at the end of the list
    enqueue(value){
        const newNode = new Node(value)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }


    dequeue(){
        if(!this.first) return null
        let temp = this.first
        if(this.length === 1){
            this.first = null
            this.last = null
        }else{
            this.first = this.first.next
            temp.next = null
        }
        this.length--
        return temp
    }


}

const queue = new Queue(5)
queue.enqueue(6)
console.log(queue);

// ====>>>array as a stack
// [10, 12, 14, 16]
// push, pop - O(1) -At the end
// shift, unshift - O(n) -At the beginning(x)


// ====>>>array as a queue
// [10, 12, 14, 16]
// push(adding) - O(1)
// shift(removing) - O(n)

// == Better use linked list to get performance benefit