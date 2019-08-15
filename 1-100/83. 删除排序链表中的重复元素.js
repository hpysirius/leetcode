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
var deleteDuplicates = function (head) {
    let cur = head;
    while (cur) {
        if (cur.next && cur.next.val === cur.val) cur.next = cur.next.next;
        else cur = cur.next;
    }
    return head;
};