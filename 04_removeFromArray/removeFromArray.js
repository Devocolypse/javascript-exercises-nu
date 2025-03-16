// Filters out arbitrary elements from an array non-destructively
const removeFromArray = function(original, ...blackList) {
    let filtered = [];
    
    OUTER: for (item of original) {
        for (blackItem of blackList) {
            if (item === blackItem) continue OUTER;
        }
        filtered.push(item)
    }

    return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;
