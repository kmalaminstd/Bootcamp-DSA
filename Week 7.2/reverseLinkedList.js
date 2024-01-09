var reverseList = function(head) {
    
    let prev = null
    let curr = head
    let forw = null

    while(curr != null){
        forw = curr.next
        curr.next = prev
        prev = curr
        curr = forw

    }

    return prev


};

console.log(reverseList([1,2,3,4,5]));