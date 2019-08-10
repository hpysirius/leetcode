function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 节点
function Node(value) {
  this.value = value; // 当前节点的元素
  this.next = null; // 下一个节点的链接
}

// 查找给定节点位置
function find(item) {
  let curNode = this.head;
  while (curNode.value !== item) {
    curNode = curNode.next;
  }
  return curNode;
}
// 插入节点
function insert(value, preValue) {
  const newValue = new Node(value);
  const curNode = this.find(preValue);
  newValue.next = curNode.next;
  curNode.next = newValue;
}


function SList() {
  this.head = new Node('head'); // 头节点
  this.find = find;
  this.insert = insert;
}


const list = new SList();


list.insert('1', 'head');
list.insert('2', '1');
list.insert('3', '2');
list.insert('4', '3');
list.insert('5', '4');
console.log(list);

const removeNthFromEnd = function (head, n) {
  if (head === null || n === 0) return head;
  let start = head;
  let end = head;
  while (n > 0) {
    start = start.next;
    n--;
  }
  // 如果start为空，删除首部head
  if (start === null) {
    return head.next;
  }
//   console.log(start);
//   debugger;
  while (start.next != null) {
    start = start.next;
    end = end.next;
  }
  end.next = end.next.next;
  return head;
};

const res = removeNthFromEnd(list.head, 2);
console.log(res);
