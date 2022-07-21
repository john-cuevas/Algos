const findMissingLetter = array =>{

    // creates dictionary of alphabet
    // let lowercase = "abcdefghijklmnopqrstuvwxyz";
    // let letters = lowercase.split("")
    // const hashtable = {};
    // let count = 1;
    // for(let i = 0; i<letters.length; i++){
    //     if(hashtable[letters[i]] == null){
    //         hashtable[letters[i]] = count; 
    //         count++;
    //     }
    // }
    // console.log(hashtable)

    // SOLUTION
    let first = array[0].charCodeAt(0);
    for(let i = 1; i < array.length; i++){
        if(first + i !== array[i].charCodeAt(0)){
            return String.fromCharCode(first + i)
        }
    }
    throw new Error("Invalid input")

}

let array = ["a","b","c","d","f"];
console.log(findMissingLetter(array))