
const removeFromArray = function(array, number1, number2) {
    
    // run through the arguments from the second to the last
    for (let i = 1; i < arguments.length; i++) {
        // get the index of argument i
        //let index = array.indexOf(arguments[i]);
        // remove that element from the array
        //array.splice(index,1);

        array = array.filter( el => el !== arguments[i]);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
