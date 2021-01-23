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
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

  module.exports = { Node, LinkedList };