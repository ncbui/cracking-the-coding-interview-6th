const { Node, LinkedList } = require('./lls.js');
// LinkedList is doubly linked, but we'll treat it as a singly for this exercise

/** Given singly linked list, 
 * Return the kth to last element
 */

const SHORT_LIST = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9]);

/**
 * 1. Iteratively with two pointers, O(n)
 * 2. Recursively??
 * 
 * For these functions,
 * k = 1, the last is at L index
 * k = 2, second to last is L-1
 * k = 3, third to last is L-2
 * kth to last in L - (k-1)
 * 
 * In a list of 3 nodes, the first node is 3rd to last
 * In a list of 9 nodes, the first node is 9th to last
 */

 const kthToLastIterative = (lls, k) => {
   if (lls.head === null) return;

   let finder = lls.head;
   let last = lls.head;

   while (k > 1) { 
      last = last.next;
      k--;
   }

   while (last.next) {
      finder = finder.next;
      last = last.next;
   }

   return {finder, last}
 }


// console.log(kthToLastIterative(SHORT_LIST, 3))
// console.log(returnKthIterative(SHORT_LIST, 5))

let nodes = [];
const kthToLastRecursiveStack = (lls, k) => {
  // dig down until we hit bottom, keep stack of nodes
  // when we hit bottom, return stack[end - k +1]
  if (lls.head === null) return;
  if (lls.head.next === null) return nodes[nodes.length-k+1] // FIXME: messy

  nodes.push(lls.head);
  lls.head = lls.head.next;

  return kthToLastRecursiveStack(lls, k)
}

// console.log(kthToLastRecursiveStack(SHORT_LIST,3))

// TODO: recursively dig down, then count up k units
// const KthToLastRecursiveI = (lls, k) => {
//   let kth = [];

//   function _kthToLast ( lls, k, lastI = 0, i = 0) {
//     if (lls.head.next === null) {
//       return;
//     }
//     if (k === i) kth.push(lls.head);
    
//     lls.head = lls.head.next;
//     _kthToLast(lls, k, lastI, i)
//   }

//   _kthToLast(lls, k)
//   return kth;
// }

// console.log(KthToLastRecursiveI(SHORT_LIST, 3))