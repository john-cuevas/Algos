const mergeTwoLists = (list1, list2) =>{
    let result = list1.concat(list2);
    result.sort((a,b) => a-b);
    return result;
}

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2))