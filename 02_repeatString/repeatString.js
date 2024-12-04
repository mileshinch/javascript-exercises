let repititions = 3;
let string = '';


const repeatString = function(string,repititions) {
    let returnedString = '';
    if (repititions < 0) {
        returnedString = 'ERROR';
    } else {
        for (let i = 1; i <= repititions; i++) {
            returnedString = returnedString.concat(string);
        }
    }
    return returnedString;
};

// Do not edit below this line
module.exports = repeatString;
