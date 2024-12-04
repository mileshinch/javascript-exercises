const reverseString = function(string) {
    // create an empty array to store the string characters
    let array = [];
    // push each character from string into an empty array
    for (character of string) {
        array.push(character);
    }

    // reverse the array
    array = array.reverse();
    
    // create an empty string to store the result
    let reversedString = '';

    // take each element of the array and append it to reversedString
    for (let i = 0; i <= array.length - 1; i++) {
        reversedString = reversedString + array[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
