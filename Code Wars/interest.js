function interest(P, r, n) {
    let simple = Math.round(P * (1 + r * n));
    let compound = Math.round(P*Math.pow(1+r, n));
    return [simple, compound];
}

console.log(interest(100, 0.1, 1));