const mergeIntervals = (intervals) =>{
//    base case
    if(intervals.length < 2){
        return intervals;
    }
    intervals.sort((a,b) => a[0] - b[0]);
    
    const result = [];
    let previous = intervals[0];
    for(let i = 1; i < intervals.length; i++){
        if(previous[1] >= intervals[i][0]){
            previous = [previous[0], Math.max(previous[1], intervals[i][1])];
        }
        else{
            result.push(previous);
            previous = intervals[i];
        }
    }
    result.push(previous);

    return result;

}

let intervals = [[1,3],[2,6],[8,10],[15,18]]
let intervals2 = [[1,4],[4,5]];

console.log(mergeIntervals(intervals));
console.log(mergeIntervals(intervals2));

