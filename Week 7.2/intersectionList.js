var getIntersectionNode = function(headA, headB) {
    
    let a = headA
    let b = headB

    
    while(a != b){
        a = a == null ? headB : a.next
        b = b == null ? headA : b.next
    }

    return b

};

console.log(getIntersectionNode([4,1,8,4,5]));