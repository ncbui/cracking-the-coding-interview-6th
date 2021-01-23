/** Node: node for a doubly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** LinkedList: connects nodes in singly linked list */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }


  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    // if list empty, set node as first
    if (this.head === null) { 
      this.head = newNode;
    };

    // if list not empty, set node at end
    if (this.tail !== null) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    };

    // always set new tail and increment length
    this.tail = newNode;
    this.length++;
  }
}

  module.exports = { Node, LinkedList };