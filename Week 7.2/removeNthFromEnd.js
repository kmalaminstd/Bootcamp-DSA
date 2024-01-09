var removeNthFromEnd = function(head, n) {
    const dummyHead = new ListNode(0)
    dummyHead.next = head


    let slow = dummyHead
    let fast = head

    for(let i = 1; i <= n; i++){
        fast = fast.next
    }

    while(fast != null){
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return dummyHead.next

};