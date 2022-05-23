// Performing swap index by index 
// Rotating counter clockwise
// for i = 0 to n
//      temp = top[i];
//      top[i] = left[i];
//      left[i] = bottom[i];
//      bottom[i] = right[i];
//      right[i] = temp;

// m = # rows
// n = # columns
function rotate(m,n){
    // base case
    if((m = 0)|| (n = 0)|| (m != n)){
        return false;
    }
    let length = m;
    for(var i =0; i < m/2; i ++){
        let first = i;
        let last = length - 1 - i;
        for(var j = first; j < last; j++){
            let offset = j - first;
            let top = matrix[first][i]; // save top

            // left -> top
            matrix[first][i] = matrix[last - offset][first];

            // bottom -> left
            matrix[last-offset][offset] = matrix[last][last-offset];

            // right -> bottom
            matrix[last][last-offset] = matrix[i][last];

            // top -> right
            matrix[i][last] = top;
        }
    }
    return true;

}