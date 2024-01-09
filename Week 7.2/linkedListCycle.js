var hasCycle = function(head) {
    
    if(head != null || head.next != null) return false
    let fast = head
    let slow = head


    while(fast != null && fast.next != null){
        fast = fast.next.next
        slow = slow.next

        if(slow === fast) return true
    }

    return false


};

console.log(hasCycle([1,2]));