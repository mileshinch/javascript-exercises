const palindromes = function (str) {
    // remove special characters and make lower case
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // loop through and check palindrome condition
    for (let i = 0; i < (str.length - 1) / 2; i++) {
        if (str[i] !== str[str.length - (i + 1)]) {
            return false;
        }
    } 
    return true;
};



// Do not edit below this line
module.exports = palindromes;
