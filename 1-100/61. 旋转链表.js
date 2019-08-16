const rotateRight = (head, k) => {
    if (!head) return null;
    let n = 0;
    for (let p = head; p; p = p.next) n++;
    k %= n;
    let first = head, second = head;
    while(k--) first = first.next;
    while(first.next){
        first = first.next;
        second = second.next;
    }
    first.next = head;
    head = second.next;
    second.next = null;
    return head;
}