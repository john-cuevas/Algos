// John Cuevas
// Input variables for x and z are in feet
// This function was done using JavaScript on VS Code

function isStrike(x, z){

    if( (x<=(8.5/12) && x >=(-8.5/12) ) && ( z >=1 && z <=3 ) ){
        console.log("Tim Lincecum threw a strike")
        return true;
    }
    else{
        console.log("Tim Lincecum threw a ball")
        return false;
    }
}

console.log(isStrike(0.5, 1));
console.log(isStrike(0.5, 4));
console.log(isStrike(0.7, 3));
console.log(isStrike(0, 0));

