function ListNode(val) {
    this.val = val;
    this.next = null;
}
function getRe(i) {
    const listNode = new ListNode(c[i]);
    if (c[i + 1] || c[i + 1] === 0) {
        listNode.next = getRe(i + 1);
    }
    return listNode;
}
let c = [2, 3, 4];
let list1 = getRe(0);
debugger;
c = [5, 6, 4];
let list2 = getRe(0);

var addTwoNumbers = function (list1, list2) {
    let v1, v2, sum;
    let curr1 = list1;
    let curr2 = list2;
    let j = 0;
    let c = [];
    while (curr1 !== null || curr2 !== null) {
        v1 = curr1 !== null ? curr1.val : 0;
        v2 = curr2 !== null ? curr2.val : 0;
        sum = v1 + v2 + j;
        j = parseInt(sum / 10);
        c.push(sum % 10);
        if (curr1 !== null) {
            curr1 = curr1.next;
        }
        if (curr2 !== null) {
            curr2 = curr2.next;
        }
    }
    // 如果有进位，推入数组
    if (j > 0) {
        c.push(j);
    }
    function getRe(i) {
        const listNode = new ListNode(c[i]);
        if (c[i + 1] || c[i + 1] === 0) {
            listNode.next = getRe(i + 1);
        }
        return listNode;
    }
    console.log(c);
    return getRe(0);
}
const result = add(list1, list2);
console.log(result);