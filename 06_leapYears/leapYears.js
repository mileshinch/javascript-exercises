const leapYears = function(year) {

    let isLeapYear = false;
    // first check if year is divisble by 100

    // if the year is not a century year
    if (year % 100 !== 0) {
        // it's a leap year if it's divisble by 4
        if (year % 4 === 0) {
            isLeapYear = true;
        }
    } else {
        // if it is a century year then it's a leap year if it's divisble by 400
        if (year % 400 === 0) {
            isLeapYear = true;
        }
    }
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
