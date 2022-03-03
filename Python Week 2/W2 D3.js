/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */

// create function
// create temp variables to hold paranthesis count
// loop thru adding paraenthesis count to counters
// if statements to check for 2 in a row. maybe

function parensValid(str) {
    var openCount = 0
    var closeCount = 0
    var last = ''
    for(var x =0; x < str.length; x++){
        if(str[x] == '('){
            openCount++;
            last = '('
        }
        else if(str[x] == ')'){
            closeCount++;
            last = ')'
        }
    }
    if (last == '('){
        return false
    }
    else if (openCount != closeCount){
        return false
    }
    return true
}
console.log(parensValid(str1));

module.exports = { parensValid };

module.exports = { parensValid };



// ------------------------------------------------------------------------------------------------



/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {}

module.exports = { bracesValid };