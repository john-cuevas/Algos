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