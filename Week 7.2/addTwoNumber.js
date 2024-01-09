var addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode(0)
    let l3 = dummyHead
    let carry = 0

    while(l1 != null || l2 != null){
        const l1Val = l1 != null ? l1.val : 0
        const l2Val = l2 != null ? l2.val : 0
        
        let currentSum = l1Val + l2Val + carry

        carry = Math.floor(currentSum/10)
        let lastDigit = currentSum % 10
        let newNode = new ListNode(lastDigit)

        l3.next = newNode

        if(l1 != null) l1 = l1.next
        if(l2 != null) l2 = l2.next
        l3 = l3.next

    }

    if(carry > 0){
        const newNode = new ListNode(carry)
        l3.next = newNode
    }

    return dummyHead.next

};

console.log(addTwoNumbers([2,4,3], [5,6,4]));