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
     * Retrieves the data of the second to last node in this list.
     * @returns {any} The data of the second to last node or null 
     *   if there is no second to last node.
     */
    secondToLast() {
        if (!this.head || this.head.next === null) {
            console.log("Empty list");
            return null
        }
        var prev;
        var curr = this.head;
        while (curr) {
            if (curr.next !== null) {
                prev = curr;
                curr = curr.next;
            }
            else {
                console.log("Second to Last")
                return prev.data;
            }
        }
        return console.log("Empty list");
    }

    /**
     * Removes the node that has the matching given val as it's data.
     * @param {any} val The value to compare to the node's data 
     *   to find the node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeData(data) {
        //HINT: The list is constructed by connecting nodes with pointers
        // Play with the pointers so that you can remove that node from the list. 
        let prev = this.head;
        let curr = this.head.next;

        while (curr.next) {
            if (curr.data == data) {
                prev.next = curr.next;
            }
            prev = prev.next;
            curr = curr.next;
        }
    }

    // BONUS
    prepend(newVal, targetVal) {
        //Insert a new node before a node that has the given target value
    }

}




var list1 = new SLL();

var list2 = new SLL();
list2.insertAtBack(5);
list2.insertAtBack(6);
list2.insertAtBack(7);
list2.insertAtBack(8);
//       HEAD
// list2: (1) --> (2) --> (3) --> null

list2.printList();
// console.log("Second to Last");
console.log(list2.secondToLast());

