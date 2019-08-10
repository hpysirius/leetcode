const rotateRight = (head, k) => {
    if (!head) return null
    let curr = head, tmp = null, n = 0
    while (curr) {
        n++
        if (!curr.next) {
            curr.next = head
            break
        }
        curr = curr.next
    }
    k = k % n
    while (k++ < n) {
        k === n && (tmp = head)
        head = head.next
    }
    tmp.next = null
    return head
}
