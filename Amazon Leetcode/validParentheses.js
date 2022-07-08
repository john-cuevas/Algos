const isValid = (s) =>{
    let result =[];
    for(let i = 0; i < s.length; i++){
        let left = s[i];
        let right = s[i+1];
        if((left == "(" && right == ")") || (left == "[" && right == "]") || (left == "{" && right == "}")){
            result.push(left, right);
        }
    }
    if(result.length == s.length){
        return true;
    }
    return false;
}
let s1 = "()"
let s2 = "()[]{}"
let s3 = "(]"
let s4 = "()[{}"
let s5 = " "
console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
console.log(isValid(s4));
console.log(isValid(s5));