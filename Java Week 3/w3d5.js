/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/

class DLLNode {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     */
    constructor() {
        // TODO: implement the constructor.
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        if (this.head == null && this.tail == null) {
            console.log("Empty list");
            return true;
        }
        return false;
    }

    // 1. construct the DLLNODE
    // 2. this.head prev point to newNode
    // 3. newNode.next point to head
    // 4. reassign this.head to newNode
    // edge case: if the DLL is empty??
    insertAtFront(data) {
        let newNode = new DLLNode(data);
        this.length++;
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        let newNode = new DLLNode(data);
        if (this.isEmpty()) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        return this;
    }

    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */

    // i think we should've done the while loop
    // 1. while the headRunner != tailRunner
    // 2. inside the while loop if headRunner = tailRunner return headRunenr
    // 3. inside the while look set headRunner to headRunner.next and vice versa
    // 4. outside of the while loop return null?

    removeMiddleNode() {
        if (this.isEmpty()) {
            return;
        }
        else {
            if (this.length % 2 == 0) {
                console.log("Even amount of nodes, no middle.");
                return null;
            } else {
                let runner = this.head;
                for (let i = 0; i < Math.ceil(this.length / 2); i++) {
                    runner = this.head.next;
                }
                return runner.data;
            }
        }
    }

    // this literally just works 
    // nice
    // :sob: i think it was a lot easier

    removeMiddleNode2() {
        if (this.isEmpty()) {
            return null;
        } else {
            let headRunner = this.head;
            let tailRunner = this.tail;
            while (headRunner.next != tailRunner.tail) {
                if (headRunner == tailRunner) {
                    return headRunner;
                }
                headRunner = headRunner.next;
                tailRunner = tailRunner.prev;
            }
            return null;
        }
    }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }


}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
// const list1 = new DoublyLinkedList()
// list1.insertAtBack(1);
// console.log(list1.toArray())
const list2 = new DoublyLinkedList()
list2.insertAtFront(1)
list2.insertAtFront(2)
list2.insertAtFront(3)
list2.insertAtBack(4)
list2.insertAtBack(5);
console.log(list2.removeMiddleNode2());
console.log(list2.toArray()) 