const solution = string =>{
    let result = ""
    let array = string.split("")
    for(let i = 0; i < array.length; i++){
        if(array[i].toUpperCase() == array[i]){
            result += " " + array[i]
        }
        else{
            result += array[i]
        }
    }
    return result;
}

let string = "camelCasing";
console.log(solution(string));
