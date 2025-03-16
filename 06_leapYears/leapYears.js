const leapYears = function(year) {
    // for the definition of a leap year, please refer to:
    // https://time-and-calendar.com/leap-years/

    if (
        year % 4 === 0 &&
        year % 100 !== 0
    ) {
        return true;
    } else if (
        year % 4 === 0 && 
        year % 100 === 0 && 
        year % 400 === 0
    ) {
        return true
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
