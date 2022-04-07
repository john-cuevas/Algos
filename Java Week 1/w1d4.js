// class Node 
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// class SLL - Singly Linked List
class SLL {
    constructor() {
        this.head = null;
    }

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

    /**
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(data) {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        while (runner.next) {
            runner = runner.next;
            if (runner.data == data) {
                return true;
            }
        }
        return false
    }

    /**
     * Removes the last node of this list.
     * @returns {any} The data from the node that was removed.
     */
    //runner.next.next == null
    removeBack() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;

        if (this.head.next == null) {
            console.log("It has hit this if statement");
            this.head = null;
            return
        }
        while (runner.next) {
            console.log("It is hitting the loop")


            if (runner.next.next == null) {
                console.log("It is hitting this line")
                runner.next = null;
                return;
            }
            runner = runner.next;
        }

    }
    // if (this.head) {
    //      this.head = this.head.next;
    //  }
    //  else {
    //      console.log("Empty list");
    //  }

    // EXTRA
    /**
     * Calculates the average of this list.
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
        if (!this.head) {
            console.log("Empty list");
            return
        }
        var runner = this.head;
        let counter = 0;
        let sum = 0;
        while (runner) {
            sum += runner.data
            runner = runner.next;
            counter++
        }
        return sum / counter;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(data, curr = this.head) {
        if (data == curr) {
            return true
        }
        return this.containsRecursive(data, curr.next)

    }


}






var list2 = new SLL();
list2.insertAtBack(1);
list2.insertAtBack(2);
list2.insertAtBack(3);
list2.insertAtBack(4);
list2.insertAtBack(5);

//       HEAD
// list2: (1) --> (2) --> (3) --> null



list2.printList();

console.log(list2.contains(3))
// expected result: true
console.log(list2.contains(1000))
// expected result: false
// list2.removeBack();
list2.printList();
console.log("This is the average :" + list2.average());
console.log(list2.containsRecursive(5))
