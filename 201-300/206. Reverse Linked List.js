const reverseList = head => {
    if(!head) return null;
    let a = head, b = head.next;
    while(b){
        let c = b.next;
        b.next = a;
        a = b, b = c;
    }
    head.next = null;
    return a;
}