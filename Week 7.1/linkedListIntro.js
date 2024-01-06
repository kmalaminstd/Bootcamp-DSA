// Linked list (Singly linked list, doubly linked list)

// creates node
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// // const newNode = new Node(10)
// // console.log(newNode);

// class LinkedList{
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode
//         this.tail = newNode
//         this.length = 1
//     }

//     //adding item at the end of the linkedList
//     // ==  time complexity 0(1)
//     push(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//         this.length++
//     }
// }

// const linkedList = new LinkedList(10)
// linkedList.push(20)

// console.log(linkedList);

class Node{
    constructor(value){
        this.head = value
        this.next = null
    }
}

class LinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    // adding data at the end
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    // adding data at the beginning

    unshift(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    // remove from the beginning
    // time complexity 0(1)
    shift(){
        if(!this.head) return null
        const temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--

        if(this.length === 0){
            this.tail = null
        }

        return temp
    }

    // remove from end
    // time complexity Big0 O(n)
    pop(){
        if(!this.head) return null
        let temp = this.head
        let pre = this.head

        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--

        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return temp
    }

    // find item at specific index
    get(index){
        // check validation of index
        if(index < 0 || index >= this.length) return null
        let temp = this.head
        for(let i = 0; i < index; i++){
            temp = temp.next
        }
        return temp
    }

    // insert item at specific index
    // time complexity O(n)
    set(index, value){
        let temp = this.get(index)

        if(temp){
            temp.value = value
            return true
        }
        return false
    }

    // inserting node at specific item
    // time complexity O(n)
    insert(index, value){
        // validate index
        if(index < 0 || index > this.length) return false

        // inserting item at the beginning
        if(index === 0) return this.unshift(value)

        // inserting node at the end
        if(this.index === this.length) return this.push(value)
    
        // inserting in betwen
        const newNode = new Node(value)
        // stoping just before the index node
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }


    // removing item at specific index
    // time complexity O(n)
    remove(index){
        if(index < 0 || index >= this.length) return false
        // removing from the beginning
        if(index === 0) return this.shift()
        // removing from the end
        if(index === this.length-1) return this.pop()
        const prevRef = this.get(index - 1)
        let temp = prevRef.next

        prevRef.next = temp.next

        temp.next = null
        this.length--


        return temp
    }


    // reversing the linked list
    reverse(){

        // changing the head to tail and tail to head
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        // working with three pointer
        let next = temp.next
        prev = null

        for(let i = 0; i < this.length; i++){
            next = temp.next 
            temp.next = prev
            prev = temp
            temp = next
        }
    }
}

const linkedList = new LinkedList()
linkedList.push(10)
console.log(linkedList.get(4));



// ==============

// Array vs singly LinkedList

