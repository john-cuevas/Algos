//ref:
//https://isaaccomputerscience.org/concepts/dsa_datastruct_stack?examBoard=all&stage=all

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        if (this.top == null) {
            return true;
        }
        return false;
        //check if the stack is empty
        //return a boolean 
    }

    push(data) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.top = newNode;
        }
        else {
            newNode.next = this.top;
            this.top = newNode;
            return;
        }
        //create a node from the data
        // newNode point to the old top
        // reassign the new top
    }

    pop() {
        if (this.isEmpty()) {
            return
        }
        let tempTop = this.top
        this.top = this.top.next;
        return tempTop

        // remove and return the top item 
    }

    peek() {
        console.log("Top is:", this.top.data)
        return this.top;
        //return the top item without removing it
    }

    size() {
        if (this.isEmpty()) {
            return 0;
        }
        let count = 0;
        while (this.top) {
            this.pop();
            count++;
        }
        return count;
        //return the size of the stack 
        // using only the above 4 operations.

    }

    printStack() { // For learning purpose
        console.log("TOP")
        let runner = this.top;
        while (runner) {
            console.log(runner.data);
            runner = runner.next
        }
    }
}

let s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.printStack();

//expected:
// TOP
// [ 3 ] 
// [ 2 ]
// [ 1 ]

console.log("POP FUNCTION")
console.log(s1.pop()); //expected: [ 3 ]
s1.printStack();
//expected: 3
// TOP
// [ 2 ] 
// [ 1 ]

console.log("PEEK FUNCTION")
s1.peek();
console.log("SIZE FUNCTION")
s1.size();
  // s1.printStack();