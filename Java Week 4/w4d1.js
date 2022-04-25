

/**
 * Class to represent a Node for a DoublyLinkedList.
 */
class DLLNode {
    /**
     * Executed when the new keyword is used to construct a new node instance.
     * @param {any} data The data the new node will store.
     */
    constructor(data) {
        this.data = data;
        /**
         * By default a new node instance will not be connected to any other nodes,
         * these properties will be set after instantiation to connect the node to
         * a list. However, the head prev should remain null.
         *
         * @type {DLLNode|null}
         */
        this.prev = null;
        /** @type {DLLNode|null} */
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
        // The list is empty to start.
        /** @type {DLLNode|null} */
        this.head = null;
        /** @type {DLLNode|null} */
        this.tail = null;
    }

    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }

    insertAtBack(data) {
        const newTail = new DLLNode(data);

        if (this.isEmpty()) {
            // if no head set the newTail to be both the head and the tail
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            newTail.prev = this.tail;

            this.tail = newTail;
        }
        return this;
    }

    /**
     * Inserts a new node with the given newVal after the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    // 1. Create the new node
    // 2. search for the targetVal by loop through the list (while loop)
    // 3. when the targetVal is found, move around the pointers

    insertAfter(targetVal, newVal) {
        const newNode = new DLLNode(newVal);

        if (this.isEmpty()) {
            return false;
        } else if (this.tail.data == targetVal) {
            this.insertAtBack(newVal);
            return true;
        } else {
            let curr = this.head;

            while (curr) {
                if (curr.data == targetVal) {
                    newNode.prev = curr;
                    newNode.next = curr.next;
                    curr.next.prev = newNode;
                    curr.next = newNode;
                    return true;
                }
                curr = curr.next;
            }
        }

        return false;
    }

    /**
     * Inserts a new node with the given newVal before the node that has the
     * given targetVal as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} targetVal The node data to find.
     * @param {any} newVal Data for the new node.
     * @returns {boolean} Indicates if the new node was added.
     */
    insertBefore(targetVal, newVal) {
        const newNode = new DLLNode(newVal);

        if (this.isEmpty()) {
            return false;
        } else if (this.head.data == targetVal) {
            this.insertAtFront(newVal);
            return true;
        } else {
            let curr = this.head;

            while (curr) {
                if (curr.data == targetVal) {
                    newNode.prev = curr.prev;
                    newNode.next = curr;
                    curr.prev.next = newNode;
                    curr.prev = newNode;
                    return true;
                }
                curr = curr.next;
            }
        }

        return false;
    }



    /**
     * Finds the given node in this list and removes it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {DLLNode} node A node in this list.
     * @returns {DoublyLinkedList} This list.
     */
    removeData(data) {
        if (this.isEmpty()) {
            return null;
        } else if (this.head.data == data) {
            this.head = this.head.next;
            this.head.prev = null;
            return this;
        } else if (this.tail.data == data) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            return this;
        }

        let curr = this.head;

        while (curr) {
            if (curr.data == data) {
                curr.prev.next = curr.next;
                curr.next.prev = curr.prev;
                return this;
            }
            curr = curr.next;
        }
        return this;
    }
    /**
         * Determines if this list is empty.
         * - Time: O(1) constant.
         * - Space: O(1) constant.
         * @returns {boolean} Indicates if this list is empty.
         */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        let newNode = new DLLNode(data);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        return this;
    }
}

const list2 = new DoublyLinkedList()
list2.insertAtBack(1)
list2.insertAtBack(2);
list2.insertAtBack(4);
list2.insertAtBack(6);
console.log("Original");
console.log(list2.toArray());
console.log();

console.log("Testing insert 3 after 2");
list2.insertAfter(2, 3);
console.log(list2.toArray());
console.log();

console.log("Testing insert 7 after 6");
list2.insertAfter(6, 7);
console.log(list2.toArray());
console.log();

console.log("Testing insert 5 before 6");
list2.insertBefore(6, 5);
console.log(list2.toArray());
console.log();

console.log("Testing insert 0 before 1");
list2.insertBefore(1, 0);
console.log(list2.toArray());
console.log();

console.log("Testing remove 3");
list2.removeData(3);
console.log(list2.toArray());
console.log();

console.log("Testing remove 0");
list2.removeData(0);
console.log(list2.toArray());
console.log();

console.log("Testing remove 7");
list2.removeData(7);
console.log(list2.toArray());
console.log();