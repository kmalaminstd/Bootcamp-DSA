class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }


    // adding item to the end
    push(value){
        const newNode = new Node(value)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++

        return this
    }

    // removing item from the end

    pop(){
        const newNode = new Node()

        if(!this.head) return null

        let temp = this.tail

        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--
        return temp

    }


    // adding item at the beginning

    unshift(value){
        const newNode = new Node(value)

        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++

        return this
    }

    // removing item from the beginning

    shift(){
        if(!this.head) return null

        const temp = this.head
        this.head = this.head.next
        if(this.head){
            this.head.prev = null
        }
        temp.next = null

        this.length--

        return temp
    }

    // finding item from specific index

    get(index){
        // invalid index
        if(index < 0 || index >= this.length) return null
        let temp = this.head
        if(index < this.length / 2){
            for(let i = 0; i < index; i++){
                temp = temp.next
            }
        }else{
            temp = this.tail
            for(let i = this.length - 1; i >= 0; i--){
                temp = temp.prev
            }
        }

        return temp
    }

    // remove node at specific index

    remove(index){
        if(index < 0 || index >= this.length) return false

        if(index === 0) return this.shift()

        if(index === this.length - 1) return this.pop()

        let temp = this.get(index)
        if(this.length > 1){
            temp.prev.next = temp.next
            temp.next.prev = temp.prev
        }else{
            this.head = null
            this.tail = null
        }
        temp.prev = null
        temp.next = null
        this.length--
        return temp
    }


    
}

const dbLinkedList = new DoublyLinkedList(10)
dbLinkedList.push(11)
console.log(dbLinkedList.pop());

