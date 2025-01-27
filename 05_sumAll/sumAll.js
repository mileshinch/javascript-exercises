const sumAll = function(num1, num2) {
    let sumOfRange = 0;
    
    if ((num1 < 0) || (num2 < 0)) {
        return 'ERROR';
    } else if ((!Number.isInteger(num1)) || (!Number.isInteger(num2))) {
        return 'ERROR';
    } else if (num1 < num2) {
        let sumOfRange = 0;
        for (let i = num1; i <= num2; i++) {
            sumOfRange = sumOfRange + i;
        }
        return sumOfRange
    } else if (num1 > num2) {
        let sumOfRange = 0;
        for (let i = num2; i <= num1; i++) {
            sumOfRange = sumOfRange + i;
        }
        return sumOfRange
    } else {
        sumOfRange = num1
        return sumOfRange;
    }
};

// Do not edit below this line
module.exports = sumAll;
