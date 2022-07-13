const nbYear = (p0, percent, aug, p) => {
    let solution = 0;
    let years = 0; 
    while (solution < p){
        let initial = p0;
        let growth = initial + (initial * percent) + aug;
        solution += Math.round(growth);
        years ++;
        initial = Math.round(growth);
        console.log(initial)
    }
    
    return years;
}

let p0 = 1000;
let percent = 0.02;
let aug = 50;
let p = 1200;
console.log(nbYear(p0, percent, aug, p));


