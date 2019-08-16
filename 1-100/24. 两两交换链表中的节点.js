/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    const dummy = new ListNode(-1);
    dummy.next = head;
    for (let p = dummy; p.next && p.next.next;) {
        let a = p.next; b = a.next;
        p.next = b;
        a.next = b.next;
        b.next = a;
        p = a;
    }
    return dummy.next;
};