const isSortedAndHow = a => {
    const s = a.join``;
    return s === a.sort((x, y) => x - y).join`` ? 'yes, ascending' :
        s === a.sort((x, y) => y - x).join`` ? 'yes, descending' : 'no';
}

let array1 = [1, 4, 3, 2, 5];
console.log(isSortedAndHow(array1));