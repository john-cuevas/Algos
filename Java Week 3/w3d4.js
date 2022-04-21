/* 
TODO: Create the SLL Node class and implement the SinglyLinkedList constructor
and the empty methods below the constructor.
*/

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

/**
 * A class to represent a singly linked list and contain all of its methods.
 */
class SLL {
    /**
     * Executed when the new keyword is used to construct a new Singly Linked List
     * instance that inherits these methods and properties.
     */
    constructor() {
        this.head = null;
        // TODO: implement the constructor.
    }
    // given
    insertAtBack(data) {
        var newNode = new ListNode(data);
        if (this.head) {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        } else {
            this.head = newNode;
        }
    }
    //given
    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }
    removeData(data) {
        // if the list is empty, return
        if (!this.head) {
            return
        }

        let prev = this.head;
        let curr = prev;

        while (prev == curr) {
            // if the head contains the data, we move the head 
            if (curr.data === data) {
                this.head = curr.next;
                prev = this.head;
                curr = prev;
            } else {
                // if the head does not contain the data, curr moves
                curr = curr.next;
            }
        }
    }

    /**
     * Removes all the nodes that have a negative integer as their data.
     * - Time: (?).
     * - Space: (?).
     * @returns {SinglyLinkedList} This list after the negatives are removed.
     */


    removeNegatives() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        let prev = this.head;
        let curr = prev;

        while (curr !== null) {
            // if the head contains the data, we move the head 
            //console.log("hi")
            // console.log("---------", curr.data)
            // console.log("---------" ,prev.data)
            // console.log("-------------------")
            if (curr.data < 0) {
                console.log("If statement executed")
                if (curr.next.data < 0) {
                    console.log("Nested If statement executed")
                    prev = curr.next.next;
                } else {
                    console.log("Nested else statement executed")
                    // prev = this.head.next;
                    this.head = curr;
                    //   prev = this.head;
                    //   curr = prev;
                    // curr = curr.next; 
                }
            } else {
                console.log("Else statement executed")
                // if the head does not contain the data, curr moves
                curr = curr.next;
            }
        }
    }

    removeNegatives2() {


        let curr = this.head;
        let ahead = this.head.next;

        while (ahead) {
            if (ahead.data < 0) {
                ahead = ahead.next;
            }
            if (ahead && ahead.data >= 0) {
                curr.next = ahead;
                curr = curr.next;
                ahead = ahead.next;
            }
        }
    }

    /**
     * Reverses this list in-place without using any extra lists.
     * - Time: (?).
     * - Space: (?).
     * @returns {SinglyLinkedList} This list.
     */
    reverse() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
    }

    /**
     * Determines whether the list has a loop in it which would result in
     * infinitely traversing unless otherwise avoided. A loop is when a node's
     * next points to a node that is behind it.
     * - Time: (?).
     * - Space: (?).
     * @returns {boolean} Whether the list has a loop or not.
     */
    hasLoop() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
    }

    printList() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

}
// -----------TEST CASE ---------------
var list1 = new SLL();
list1.insertAtBack(1);
list1.insertAtBack(4);
list1.insertAtBack(-5);
list1.insertAtBack(2);
list1.insertAtBack(-7);
list1.insertAtBack(1);
list1.printList();
list1.removeNegatives2();
console.log("-------------------------")
list1.printList();
// Edge cases for removeNegative
// 1. if 2 negative numbers are next to each other
// 2. if the negative number is in the head
// 3. if the negative number is in the tail




// TEST CASE FOR A LOOPED LIST
// var loopedList = new SLL();
// var node1 = new Node(1)
// var node2 = new Node(2)
// var node3 = new Node(3)
// var node4 = new Node(4)
// var node5 = new Node(5)
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node3; 
// loopList.head = node1;