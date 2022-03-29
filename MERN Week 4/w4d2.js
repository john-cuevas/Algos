//------------ Grouping Categories ---------
/* 
This was extracted from a react interview challenge. The items were to be displayed in category groups.
Given an array of objects that contain a category key,
return a hash table to group the objects by their category.
Make the grouping case-insensitive.
Bonus: allow the key that is grouped by to be provided.
*/
const objects = [
    {
        name: "Luke APIWalker",
        category: "Frontend",
    },
    {
        name: "JokesAPI",
        category: "backend",
    },
    {
        name: "Axios Pokemon API",
        category: "frontend",
    },
    {
        name: "Authors",
        category: "full stack",
    },
    {
        name: "FakerAPI",
        category: "Backend",
    },
    {
        name: "Product Manager",
        category: "Full stack",
    },
];


const expected = {
    frontend: [
        {
            name: "Luke APIWalker",
            category: "Frontend",
        },
        {
            name: "Axios Pokemon API",
            category: "frontend",
        },
    ],
    backend: [
        {
            name: "JokesAPI",
            category: "backend",
        },
        {
            name: "FakerAPi",
            category: "Backend",
        },
    ],
    "full Stack": [
        {
            name: "Authors",
            category: "full stack",
        },
        {
            name: "Product Manager",
            category: "Full stack",
        },
    ],
};

// pseudo code
// create function that takes in a list of objects
// create empty result
// for loop to through objects
//   if category is not a key, push into result
// 

function groupObjects(items) {
    const result = {}
    for (item of items) {
        if (!result[item.category.toLowerCase()]) {
            result[item.category.toLowerCase()] = [item]
        }
        else {
            result[item.category.toLowerCase()].push(item)
        }

    }
    return result
}

console.log(groupObjects(objects))

function groupObjects2(items) {
    const frontend = items.filter(i => i.category.toLowerCase() === "frontend")
    const backend = items.filter(i => i.category.toLowerCase() === "backend")
    const fullstack = items.filter(i => i.category.toLowerCase() === "full stack")

}

console.log(groupObjects2(objects))

//------------ backspace string compare---------



const S1 = "ab#c"; // ac
const T1 = "ad#c"; //ac
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##"; //""
const T2 = "c#d#"; //""
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c"; //"c"
const T3 = "#a#c"; //"c"
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c"; //c
const T4 = "b"; //b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/
function backspaceStringCompare(S, T) {

}
