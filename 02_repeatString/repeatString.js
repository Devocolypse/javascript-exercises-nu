const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    } else {
        let echo = '';
        
        for (let i = 0; i < num; i++) {
            echo += string;
        }
        return echo;
    }
};

// Do not edit below this line
module.exports = repeatString;
