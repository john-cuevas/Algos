function spongebob (sentence){
    let result ="";

    for(let i = 0; i < sentence.length; i++){
        if(i %2 ==0){
            result += sentence[i].toUpperCase();
        }
        else{
            result += sentence[i].toLowerCase();
        }
    }
    return result;
}

let sentence1 = "HELLO world";
console.log(spongebob(sentence1));