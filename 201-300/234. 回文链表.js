// 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (head && head.next === null) return true;
    let fast = head, slow = head;
    let pre = null, s = null; // s 相当于上一个链表
    while (fast !== null && fast.next !== null) {
        pre = slow;
        fast = fast.next.next; // 走两步
        slow = slow.next;
        // 反转前半部分链表
        pre.next = s;
        s = pre;
    }
    let tmp = slow;
    if (fast !== null) tmp = tmp.next;
    slow = pre;
    while (tmp !== null) {
        if (tmp.val !== slow.val) return false;
        else {
            tmp = tmp.next;
            slow = slow.next;
        }
    }
    return true;
};








// 找到链表值，这种方法事件复杂度超过O(n)了，这种跟链表就没什么关系了。
// var isPalindrome = function (head) {
//     let nums = [];
//     while (head) {
//         nums.push(head.val);
//         head = head.next;
//     }
//     if (nums.length === 1) return true;

//     let l = 0, r = nums.length - 1;
//     while (l < r) {
//         if (nums[l++] !== nums[r--]) return false;
//     }
//     return true;
// };