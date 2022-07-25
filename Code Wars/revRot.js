const revrot = (str, sz) =>{
    // base case
    if(sz <= 0 || !str || sz > str.length){
        return '';
    }
    // taking sum of the digits cubed
    const sumCubes = chunk => chunk.split('').reduce((sum, digit) => sum += digit**3, 0);
    // reversing the order of digits
    const reverse = chunk => chunk.split('').reverse().join('');
    // rotate digits to the left by 1
    const rotate = chunk => chunk.slice(1) + chunk.slice(0,1);

    // create an empty array of chunks
    const chunks = [];

    for(let i = 0; i < str.length; i+= sz){
        console.log("test")
        let chunk = str.slice(i, i + sz);
        if(chunk.length < sz) continue;

        // check if sum of digits cubed is divisible by 2

        chunk = sumCubes(chunk) % 2
        ? rotate(chunk)
        : reverse(chunk);

        chunks.push(chunk)
    }
    return chunks.join('')
}

let str = "123456987654";
let sz = 6;
console.log(revrot(str, 6 ))