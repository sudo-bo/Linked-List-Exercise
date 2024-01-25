/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const new_input = new Node(val);
    if (this.length === 0) {
      this.head = new_input;
      this.tail = new_input;
    }
    this.tail.next = new_input;
    this.tail = this.tail.next;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const new_input = new Node(val);
    new_input.next = this.head;
    this.head = new_input;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return null;

    const removed_node = this.tail;
    const new_tail = this.getAt(this.length - 2);
    this.tail = new_tail;
    this.tail.next = null;
    this.length--;
    return removed_node;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) return null;

    const removed_node = this.head;
    const new_head = this.getAt(1);
    this.head = new_head;
    this.length--;
    return removed_node;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }

    let curr = this.head;

    for (let temp = idx; temp > 0 && curr !== null; temp--) {
      curr = curr.next;
    }

    return curr;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    old_node = this.getAt(idx);
    old_node.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const old_node = this.getAt(idx);
    const new_node = new Node(val);

    new_node.next = old_node.next;
    old_node.next = new_node;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) return null;

    node = this.getAt(idx - 1);

    old_node = node.next;
    node.next = node.next.next;

    this.length--;
    return old_node;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return null;

    let sum = 0;
    for (let idx = 0; idx < this.length; idx++) {
      sum += this.getAt(idx).val;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;
