var middleNode = function(head) {
    
    if(head == null || head.next == null) return head

    let slow = head
    let fast = head

    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
    }

    return slow

};



console.log(middleNode([1,2,3,4,5]));