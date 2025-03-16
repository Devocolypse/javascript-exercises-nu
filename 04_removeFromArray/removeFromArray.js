const removeFromArray = function(original, ...blackList) {
    // create a new array variable to hold the final result
    let filtered = [];
    
    // FOR each item in the array, check to see if is on the blacklist
    OUTER: for (item of original) {
        // FOR each item on the blacklist (arbitrary)
        for (blackItem of blackList) {
            /* check if they're equal IF so, then CONTINUE 
            to the next item in the original array */
            if (item === blackItem) continue OUTER;
        }
        // ELSE, add the item to the new array
        filtered.push(item)
    }

    // return the new array
    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
