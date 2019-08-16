/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    if (n === m) return head;
    const dummy = new ListNode(-1);
    dummy.next = head;
    let a = dummy, d = dummy;
    for (let i = 0; i < m - 1; i++) a = a.next;
    for (let i = 0; i < n; i++) d = d.next;
    let b = a.next, c = d.next;
    for (let p = b, q = b.next; q !== c;) {
        let o = q.next;
        q.next = p;
        p = q, q = o;
    }
    b.next = c;
    a.next = d;
    return dummy.next;
};