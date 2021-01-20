# Summary of each chapter

Takeaways, common techniques and issues for each chapter

## Data Structures


### Arrays and Strings

**Common techniques**
    - use a hash map
    - use of pointers

**Common Issues**
    - remember that strings are immutable, editing to a string involves creating new values in a new memory location. build with an array first, then concat


### Hash Tables
    - can be implemented with an array of linked lists and hashing function. For each str
        - compute hash code (int or long)
        - map hash code to index ( hash % arr.length)
        - store or retrieve (lls handle collisions here)
    - at best O(1)
    - at worst O(n) when poorly designed

**Common Techniques**

**Common Issues**


### Linked Lists
    - Great for adding/remove to head in constant time. If doubly-linked, same applies to tail. 
    - Always check for (1) null pointer and (2) update the head or tail pointer as necessary

**Common Techniques**
    - Runner (2nd pointer)
        - slow pointer with a fast pointer that moves x-nodes per node that the slow runner goes through
        - ex: move forward until the fast pointer hits the tail, and then work backwards
    - Recursion often useful

**Common Issues**
    - No index to iterate through, finding the Kth element in the list will be at worse O(n) time
    - Searching at worse O(n)


### Stacks and Queues
    - Stacks: LIFO (last in first out) ordering
    - Queues: FIFO (first in first out) ordering
    - constant time for adds and removes, doesn't shift items (doesnt require memory re-allocation like arrays)

**Common techniques**
    - Stacks: 
        -- Linked list used to implement stacks, adds/removes occur at same side
        -- Can also treat arrays like stacks (NSEW-direction simplification problem)
    - Queues: 
        -- Doubly linked lists used to implement queues, adds/removes occur at opposite ends
        -- Great for BFS or building caches
    - Priority Queues: Trees are great implementations
    - Useful in recursive algorithms
    - Useful to implement a recursive algortihm iteratively
    
**Common Issues**
    - No index to iterate through, finding the Kth element in the list will be at worse O(n) time



### Trees
    - Great for hierarchal data (file system, React)

    - Benefits with moderate organization:
        - search time: Faster than linked list, slower than array
        - insert/delete: Slower than unordered link list, faster than array

    - Requirements
        -- A type of graph that is not-cyclical
        -- Has a root node 
        -- Each node has 0 or more children
        -- Nodes cannot link back to their parents

        -- Features:
            --- Complete tree: all levels filled except the last. Last level must be filled left to right
            --- Full binary tree: Every node has 0 or 2 children
            --- Balanced tree: balanced enough to ensure O(log n) times for inserti and find. Common types: red-black trees and AVL trees
            --- Perfect binary trees: really fucking rare. All interior nodes have 2 children, all leaf nodes at the same level

        -- Special tree types
            --- Binary tree: Each node can have up to two children. 
            --- Binary search tree: Binary tree with specific ordering rule. Each node's left descedents must be less than the node's values, right descendents must be greater. Fast search and edit, can also find closest item
            
            --- Heap: implemented with arrays, used for priority queue
            --- Trie: implement dictionary by pre-fix
            --- B-Tree: implement indexing in databases

**Common Techniques**
    - In-order traversal: 'visit' (print) left branch, current node, right branch
    - Post-order traversal: 'visit' (print)  current node, left branch, right branch
    - Pre-order traversal: 'visit' (print) left branch, right branch, current node

**Common Issues**

### Tries
    - n-ary tree, each node can hve up to length of alphabet + terminating node
    - each node holds one letter
    - Useful to optimize problems involving lists of valid words, can pass a reference to the current node once, 
        - Ex: check if Y is a children of MAN
            - Traverse down trie to get to M-A-N, pass N
            - OR lookup M, then MA, then MAN, then MANY
    - Application: Autocomplete without weights between nodes

**Common Techniques**
    - insert and find in O(L) time where l - length of word
        - faster than hash time because we dont need a hash function
    - efficient prefix search or autocomplete


**Common Issues**
    - requires lots of memory (if space is a concern, consider ternary search tree for dictionary implementation)

### Heaps
    - Complete binary trees (totally filled other than rightmost element) with special ordering
    - Min-heap: root is the minimum and each node is smaller than its children
    - Max-heap: root node is the maximum and each node is larger than its children

**Common Techniques**
    - Insert: 
        -- runtime O(log n)
        -- Add to the next available spot in bottom (look left to right)
        -- swap element with its parent (bubble up)
    - extract_min (or _max):
        -- Remove min (max) element  aka root
        -- Set last node to root
        -- Swap node with the smallest of its children (bubble down)

**Common Issues**
    - Cannot be done with unbalanced trees

### Graphs
    - Collection of nodes (or vertexes) where some have edges between them
    - Features:
        -- Direction: directed (list of followers) or undirection (2 way street)
        -- Connection: might consist of subgraphs, or have a path between every pair of vertices (connected)
        --Cycles: 

**Common Techniques**
    - Represented with
        -- Adjacency List, either like a tree or array/hashtable
        -- Adjacency Matrix
    - Graph Search
        -- DFS
            preferred to visit every node
            exhaustive search
            can be recursive, using stacks
        -- BFS
            find shortest path (or any path)
            stay as close to key node for as long as possible
            uses a queue
            great for bidirectional search (nth degrees of separation)
                --- two simulataneous BFS searchs. If search collides, found path

**Common Issues**


## Algorithms


### BFS
    - Shortest path, p2p networks, web crawling, social networks, garbage collection, detecting cycles in undirected graphs
    - iteratively (while queue)
        - initialize queue
        - nodes with visited boolean


### DFS
    - Recursively DFS for a graph
        - function dfs (node, visitedArr)
        - add node to visitedArr
        - traverse all adjacent, unmarked nodes
        - once leaf node found, backtrack and call recrusive function on unmarked nodes
    - Pathfinding, detecting cycles in directed graphs, 


### Binary Search
    - Find item from a sorted list
    - Can be done iteratively with two pointers or recursively by tracking the midway
    - Implement binarySearch (arr, firstIdx, lastIdx, x) to find x.
    - O(log n) time


### Merge Sort
    - Binary Divide and conquer
    - One of the most efficient
    - Best implemented recursively
    (-) Recursively divide arrays in half
    (-) Working one half until half sorted
        (--) Repeat until size becomes 1
        (--) Compare and merge
    (-) Repeat for second half until half sorted
    (-) Compare and merge two halves
    - Implement mergeSort ( arr, firstIdx, midIdx, lastIdx)
    - Runtime  θ(nLogn) for worse, best, ave
    - useful for sorting linked list

### Quick sort
    - Divide and conquer by partitioning around a 'pivot' element
    - Common pivots: first ele, last ele, random, median
    - left node contains all ele lower than pivot, right higher
    - Implement quickSort (arr, firstIdx, lastIdx)
    - Worse case O(n^2), best O(n log n)