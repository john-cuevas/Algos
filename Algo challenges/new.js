const myArray = new Array(2)

myArray[1] = 1
myArray[3] = 3

console.log(myArray.length)
console.log('elements')

for(const element of myArray){
    console.log('\t', element)
}
