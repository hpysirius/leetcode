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
var sortList = function (head) {
    const dummy = new ListNode(-1);
    dummy.next = head;
    let n = 0;
    for (let p = head; p; p = p.next) n++;
    for (let i = 1; i < n; i *= 2) {
        let cur = dummy;
        for (let j = 0; i + j < n; j += i * 2) {
            let left = cur.next, right = cur.next;
            for (let k = 0; k < i; k++) right = right.next;
            let l = 0, r = 0;
            while (l < i && r < i && right) {
                if (left.val <= right.val) {
                    cur.next = left;
                    cur = left;
                    left = left.next;
                    l++;
                } else {
                    cur.next = right;
                    cur = right;
                    right = right.next;
                    r++;
                }
            }
            while (l < i) {
                cur.next = left;
                cur = left;
                left = left.next;
                l++;
            }
            while (r < i && right) {
                cur.next = right;
                cur = right;
                right = right.next;
                r++;
            }
            cur.next = right;
        }
    }
    return dummy.next;
};