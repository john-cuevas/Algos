const nbYear = (p0, percent, aug, p) => {
    let years = 0;
    // while (solution < p){
    //     let initial = p0;
    //     let growth = initial + (initial * percent) + aug;
    //     solution += Math.round(growth);
    //     years ++;
    //     initial = Math.round(growth);
    //     console.log(initial)
    // }

    for (let i = 0; p0 < p; i++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
        years ++;
        console.log(p0)
    }
    return years
}

let p0 = 1000;
let percent = 0.02;
let aug = 50;
let p = 1200;
console.log(nbYear(p0, percent, aug, p));


