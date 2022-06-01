function towerBuilder(nFloors) {
    let blanks = " ";
    let mark = "*";
    let array = [];

    for (var i = 1; i <= nFloors; i++) {
        let marks = (i * 2) - 1;
        let space = nFloors - i;
        let row = blanks.repeat(space) + mark.repeat(marks) + blanks.repeat(space);
        array.push(row);
    }
    return array;
}

console.log(towerBuilder(6));

// returns 
// [  * ,
//   ***   ,
// *******]