function generateParantheses(n) {
    const result = [];
    breadthFirstSearch("", 0, 0);
    return result;

    function breadthFirstSearch(str, left, right) {
        if (left === n && right === n) {
            result.push(str);
            return;
        }
        if (left !== n) {
            breadthFirstSearch(str + "(", left + 1, right);
        }
        if (left > right) {
            breadthFirstSearch(str + ")", left, right + 1);
        }
    }
}
let n = 4;
console.log(generateParantheses(3))