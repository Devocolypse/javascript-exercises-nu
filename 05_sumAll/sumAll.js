const sumAll = function(x, y) {
    // checks for "correct" value types first
    if (
        x < 0 ||
        y < 0 ||
        Math.floor(x) !== x ||
        Math.floor(y) !== y
    ) return 'ERROR';

    let finalSum = 0;
    let start = x;
    let end = y;

    // ensures incrementive loop works regardless of whether 'x' or 'y' is larger
    if (x > y) {
        start = y;
        end = x;
    }
    
    // after each addition, the gap between the original 'x' and 'y' shortens
    while (start <= end) {
        finalSum += start;
        start++;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
