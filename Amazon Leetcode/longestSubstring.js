//  Longest Substring Without Repeating Characters
function longestSubstring(string){
    let map = {};
    let maxLen = 0;
    let start = 0;
    for(var end =0; end < string.length; end++){
        let lastChar = string[end];
        if(map[lastChar] === undefined){
            map[lastChar] = 0; 
        }
        console.log(map);
        console.log(map[lastChar])
        map[lastChar]++;
        
        while(map[lastChar] > 1){
            let firstChar = string[start];
            map[firstChar] --; 
            start ++;
        }
        maxLen = Math.max(maxLen, end - start + 1 );
    }
    return maxLen;

}

let str1 = "abcabcbb";
// output should be 3, abc

console.log(longestSubstring(str1));