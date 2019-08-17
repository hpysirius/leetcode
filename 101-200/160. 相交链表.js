/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let p = headA, q = headB;
    while (p !== q) {
        if (p) p = p.next;
        else p = headB;
        if (q) q = q.next;
        else q = headA;
    }
    return p;
}