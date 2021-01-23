const {Node, LinkedList} = require('./lls.js');

/** Given an unsorted linked list, remove duplicates
 * 
 * Return a linked list without duplicates
 * BONUS: do it without a temporary buffer
 */

 /** Run time options
  * 1. At each node, run the whole lls to find duplicate. O(n ** n), horrible
  * 2. Run through the whole list, and count. Check against counter as we traverse list. O(n) time with +1 space
  * 3. Sort list and then remove. O(n log n) + O(n)
  * 4. Use two pointers O(n**2)
  */

  const removeDupHash = (list) => {
    let records = new Set();

    let node = list.head;
    
    while (node) {
      if (records.has(node.val)) {

          if (node.next !== null) {
            node.next.prev = node.prev;
          }

          node.prev.next = node.next;
          list.length--;
      } else {
        records.add(node.val);
      }
      node = node.next;
    }

    return list;

  }

  const unsortDup = new LinkedList([1, 3, 4, 2, 1, 3, 2, 4]);
  const dupRemoved = new LinkedList([1, 3, 4, 2]);

console.log(removeDupHash(unsortDup))
// TODO: How do i test linked lists?


const removeDupTwoP= (list) => {
  let records = new Set();

  let trackerNode = list.head;

  while (trackerNode) {
    // create a fast pointed
    let seekerNode = trackerNode.next;
    // go down the list until seekerNode is null
      // remove if value is same as trackerNode
    while (seekerNode) {
      if (seekerNode.val == trackerNode.val) {
        seekerNode.prev.next = seekerNode.next;
        seekerNode.next.prev = seekerNode.prev;
        list.length--;
      }
      seekerNode = seekerNode.next;
    }
    // move slow pointer forward
    trackerNode = trackerNode.next;
  }

  return list;

}

const unsortDup2 = new LinkedList([5,5,2])
console.log(removeDupTwoP(unsortDup2))