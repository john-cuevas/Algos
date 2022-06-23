function isSortedAndHow(array) {
    let ascending = array.sort((a,b) => a-b);
    let descending = ascending.reverse();
    console.log(ascending);
    console.log(array)
    console.log(descending);
    if(ascending === array){
        return "yes, ascending";
    }
    else if(descending === array){
        return "yes, descending";
    }
    else{
        return "no";
    }
}

let array1 = [2, 1, 3, 4, 5];
console.log(isSortedAndHow(array1));