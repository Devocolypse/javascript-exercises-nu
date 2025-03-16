const reverseString = function(original) {
    let reversed = "";

    for (let i = original.length; i > 0; i--) {
        let currentChar = original.at(i - 1);
        reversed += currentChar;
    }
    
    return reversed;
};

reverseString("epic")

// Do not edit below this line
module.exports = reverseString;
