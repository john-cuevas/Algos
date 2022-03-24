const students = [
    {
        firstName: "Jane",
        lastName: "Doe",
        habits: [
            "doesn't wash dishes",
            "falls asleep in lecture",
            "shows up early",
        ],
    },
    {
        firstName: "John",
        lastName: "Smith",
        habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
        firstName: "Arya",
        lastName: "Stark",
        habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
        firstName: "Jon",
        lastName: "Snow",
        habits: ["shows up early", "helps peers", "washes dishes"],
    },
];

const badHabit1 = "doesn't wash dishes";
const expected1 = ["Jane Doe", "Arya Stark"];

const badHabit2 = "shows up late";
const expected2 = ["John Smith", "Arya Stark"];

const badHabit3 = "typo";
const expected3 = [];

//pseudo code
// function that takes in persons and badHabit
// newArray with firstName + lastName
// for loop through persons - person of persons
// for loop to loop through habits
// if habits[i] === badHabit -
//then send firstname + lastname to new array
// return newArray


function santasNaughtyList(persons, badHabit) {
    //Finds a list of people whose habits contain the given bad habit.
    //return an array of the firstname and the lastname of them.
    let newArr = []
    for (person of persons) {

        for (let i = 0; i < person.habits.length; i++) {
            // console.log(`${person.habits[i]}`)
            if (person.habits[i] === badHabit) {
                newArr.push(person.firstName + " " + person.lastName)
            }
        }
    }
    return newArr
}
console.log(santasNaughtyList(students, badHabit1))
console.log(santasNaughtyList(students, badHabit2))
console.log(santasNaughtyList(students, badHabit3))


function santasNaughtyListFunctional(persons, badHabit) {
    let newArr = []
    for (person of persons) {
        if (person.habits.includes(badHabit)) {
            newArr.push(person.firstName + " " + person.lastName)
        }
    }
    return newArr
}

console.log(santasNaughtyListFunctional(students, badHabit1))
console.log(santasNaughtyListFunctional(students, badHabit2))
console.log(santasNaughtyListFunctional(students, badHabit3))