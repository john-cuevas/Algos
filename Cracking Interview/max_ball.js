function maxBall(v) {
    let g = .981; // gravity factored for tenth of a second
    v = v / 3.6; // km/hr factored to m/s

    let max = 0;

    for (let t = 0; t < 50; t += 1) {
        let h = v * t - 0.5 * g * t * t;

        if (h >= max) {
            max = h;
        } else {
            return t - 1; // loop counts one more tenth of a second to break if check
        }
    }
}

console.log(maxBall(37));
console.log("------------------");
console.log(maxBall(45));
console.log("------------------");
console.log(maxBall(99));
console.log("------------------");
console.log(maxBall(85));