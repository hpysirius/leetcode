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
    let dummy = new ListNode(-1);
    dummy.next = head;
    let cur = dummy;
    while (cur.next) {
        let t = cur.next; // 临时的t
        while (t && t.val === cur.next.val) t = t.next;
        // if t 走过cur.next, 则跳过t
        if (cur.next.next === t) cur = cur.next;
        // 否则指回去
        else cur.next = t;
    }
    return dummy.next;
};