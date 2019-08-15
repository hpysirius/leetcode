/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(-1);
  dummy.next = head;
  let first = dummy, second = dummy;
  while (n--) first = first.next;
  while (first.next) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
};