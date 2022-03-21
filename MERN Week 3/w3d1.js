/* 
  Recreate Object.entries method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};

const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };

// This object contains inherited key value pairs from the above proto obj.
// hint: hasOwnProperty
const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
});

const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];



function entrie2(obj) {
    //given an object, return a 2d array of key value pairs. 
    // expected return array: [[key1, val1], [key2, val2] ...]
    // Do not inherit the inherited proto
    let expected = []
    for(key in obj){

        if(obj.hasOwnProperty(key)){
            expected.push([key, obj[key]])
        }
    }
    return expected
}

console.log(entrie2(obj1))
console.log(entrie2(obj2))

function entries(obj) {
    //Make new array(s)
    let keyArr = Object.keys(obj);
    let valueArr = Object.values(obj);
    let objArr = [];
    let v = 0;
    //loop through key and value arrays
    for (let k = 0; k < keyArr.length; k++) {
        pairArray = [keyArr[k], valueArr[v]];
        objArr.push(pairArray);
        pairArray = []
        v++;
    }
    return objArr;
}

console.log(entries(obj1))
console.log(entries(obj2))


// Bonus:

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };

console.log(insertData1["first_name"])
// expected result: 
// "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
// expected result
// "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.


function insert(tableName, columnValuePairs) {
    const keyArr = Object.keys(columnValuePairs)
    const valueArr = Object.values(columnValuePairs)

    const keyStrings = keyArr.join(", ")
    const valueStrings = valueArr.join(", ")

    return `INSERT INTO ${tableName} (${keyStrings}) VALUES (${valueStrings})`
}

console.log(insert(table, insertData1))
console.log(insert(table, insertData2))
//Generates a SQL insert statement from the inputs
// Tip: string interpolation (`) will make it easy to add variables into a string or to add quotations without needing to escape them.

function insertFunctional(tableName, columnValuePairs) {
    //Bonus: Write a 2nd solution focusing on functional programming using built in methods
}



