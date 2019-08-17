const detectCycle = head => {
    let fast = head, slow = head;
    while(slow) {
        fast = fast.next;
        slow = slow.next;
        if(slow) slow = slow.next;
        else break;
        // 第一次相遇  
        if(fast === slow){
            slow = head;
            while(fast !== slow){
                fast = fast.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;
}