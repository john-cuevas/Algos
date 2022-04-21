/**

 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
 class MinHeap {
    constructor() {
      /**
       * 0th index not used, so null is a placeholder. 
       * Not using 0th index makes calculating the left and right
       * children's index cleaner.
       * This also effectively makes our array start at index 1.
       */
      this.heap = [null];
    }
  
  
   insert(num) {
    //push into heap
     this.heap.push(num);
     let currInd = this.heap.length - 1;
     while(this.heap[currInd] < this.heap[Math.floor(currInd/2)]){
       let temp = this.heap[Math.floor(currInd/2)];
       this.heap[Math.floor(currInd/2)] = this.heap[currInd];
       this.heap[currInd] = temp;
            
       currInd = Math.floor(currInd/2);
     }
    }
    /**
     * Extracts the min num from the heap and then re-orders the heap to
     * maintain order so the next min is ready to be extracted.
     * 1. Swap the last node with the min node
     * 2. As min is the last node after swapping, pop the last node off 
     * 3. Find the smaller child
     * 4. Iteratively swap the old last node that is now at idx1 with it's
     *    smallest child IF the smallest child is smaller than it.
     * - Time: O(log n) logarithmic due to shiftDown.
     * - Space: O(1) constant.
     * @returns {?number} The min number or null if empty.
     */
  
   //  * children except the 'node' may only have a left child.
   // * - parent is located at: Math.floor(i / 2);
   // * - left child is located at: i * 2
   // * - right child is located at: i * 2 + 1
     extract() {
       
      let temp = this.heap[1];
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap[this.heap.length - 1] = temp;
      this.heap.pop();
      let i = 1;
      while(i < this.heap.length){
        if(this.heap[i] < this.heap[i * 2]){
          let temp2 = this.heap[i];
          this.heap[i] = this.heap[i*2];
          this.heap[i*2] = temp2;
        }
        else{
          let temp2 = this.heap[i];
          this.heap[i] = this.heap[i*2 + 1];
          this.heap[i*2 + 1] = temp2;
        }
      }
      return this.heap;  
      
    }
  // good job! I just run it and i think it works!
    // but quick question... what if the minHeap is 
    // bigger.. like 4-5 layers. 
    // what if you need to swap the parent with the child twice or more
    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
      if (parentIdx > this.heap.length - 1) {
        return;
      }
  
      spaceCnt += spaceIncr;
      this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);
  
      console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
          `${this.heap[parentIdx]} (${parentIdx})`
      );
  
      this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
  }
  
  
  var heap = new MinHeap();
  heap.insert(10)
  heap.insert(15)
  heap.insert(17)
  heap.insert(20)
  heap.insert(22)
  heap.insert(28)
  heap.insert(5)
  heap.insert(6)
  heap.insert(17)
  heap.insert(26)
  heap.insert(32)
  heap.insert(12)
  heap.insert(29)
  heap.insert(31)
  heap.insert(35)
  // console.log(heap.heap)
  // //[null, 5,15, 10,20, 22, 28, 17]
  // heap.printHorizontalTree()
  // heap.extract()
  heap.printHorizontalTree()
  heap.extract()
  console.log("----------------------------------")
  heap.printHorizontalTree()
  // console.log(heap.heap)
  // //[null, 10, 15, 17, 20, 22,28]
  
  // heap.printHorizontalTree()