// do baby shark in less than 300 characters

// my solution
const babyShark = () => {
    let loop = 0;
    const char = ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', "Let's go hunt"];
    for(let i =0; i < char.length; i++){
        while(loop < 4){
            console.log(char[i] + ", doo doo doo doo doo doo");
            loop++;
        }
        loop = 0;
        console.log(char[i] +"!")
    }
    return("Run away,...")
}

// more condense
// join method creates and returns new string by concatenating all of the elements in an array, separated by commas or specified separator string

const babyShark1 = () =>{
    names = ['Baby shark', 'Mommy shark', 'Daddy shark', 'Grandma shark', 'Grandpa shark', "Let's go hunt"];
    return names.map((name) => `${name}, ${" doo".repeat(6)}\n`.repeat(3) + `${name}!\n`).join("") + "Run away,...";
}
console.log(babyShark1());