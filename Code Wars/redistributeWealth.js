const redistributeWealth = (wealth) =>{
    result = 0;
    for(let i = 0; i< wealth.length; i++){
        result += wealth[i];
    }
    for(let i = 0; i< wealth.length; i++){
        wealth[i] = result/wealth.length;
    }
    return wealth;
}

let wealth = [5, 10, 6];
// outputs [7, 7, 7]
console.log(redistributeWealth(wealth));