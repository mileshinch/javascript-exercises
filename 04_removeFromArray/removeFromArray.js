
const removeFromArray = function(arrayOfNumbers = [0,1,2,3], number = 3) {
    //define variables
    
    // remove number from arrayOfNumbers
        // get the index of number
        let index = arrayOfNumbers.indexOf(number);
        // use splice to remove that element
        arrayOfNumbers.splice(index,1);
        return arrayOfNumbers;
};

// Do not edit below this line
module.exports = removeFromArray;
