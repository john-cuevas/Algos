const mergeTwoLists = (list1, list2) => {
    let result = list1.concat(list2);
    result.sort((a, b) => a - b);
    return result;
}

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];
let list3 = [];
let list4 = [];
// console.log(mergeTwoLists(list1, list2))
// console.log(mergeTwoLists(list3, list4))

// merging with singly linked list

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// youtube solution

const mergeTwoLists2 = (list1, list2) => {
    const dummy = new ListNode(-Infinity);
    let prev = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            prev.next = list1;
            prev = list1;
            list1 = list1.next;
        } else {
            prev.next = list2;
            prev = list2;
            list2 = list2.next;
        }
    }
    if (!list1) prev.next = list2;
    
    if (!list2) prev.next = list1;
    

    return dummy.next
}

console.log(mergeTwoLists2(list1, list2))
console.log(mergeTwoLists2(list3, list4))

const mergeTwoLists3 = (l1, l2) =>{
    // Initialize new linked list with dummy list node
    let newList = new ListNode(0);

    // maintain a reference to head of new linked list
    let head = newList;

    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            // adds l1 value to new list
            newList.next = l1;
            // move l1 to its next element
            l1 = l1.next;
        }else{
            // adds l2 value to new list
            newList.next = l2;
            l2 = l2.next;
        }
        // move into the next level of the linkedlist for the next iteration
        newList = newList.next;
    }

    // if l1 out of elements
    if(l1 === null){
        newList.next = l2;
    }
    // if l2 out of elements
    else{
        newList.next = l1;
    }
    return head.next;
}
console.log(mergeTwoLists3(list1, list2))
console.log(mergeTwoLists3(list3, list4))