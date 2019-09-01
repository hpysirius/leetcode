// 迭代
const reverseList = head => {
    if (!head) return null;
    let a = head, b = head.next;
    while (b) {
        let c = b.next;
        b.next = a;
        a = b, b = c;
    }
    head.next = null;
    return a;
}


// 递归

var reverseList = function (head) {
    if (!head || !head.next) return head;
    let tail = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return tail;
};