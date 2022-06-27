// do baby shark in less than 300 characters

// my solution
const babyShark = (char) => {
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
    console.log("Run away,...")
}
console.log(babyShark());