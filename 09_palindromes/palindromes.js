const palindromes = function (str) {
     // remove punctionation
     str = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
     // convert to lower case
     str = str.toLowerCase()
     // loop through string does the first letter === last letter
    for (let i = 0; i < str.length/2; i++) {
       

        // does the first letter equal the last letter
        if (!(str[i] === str[str.length-i])) {
            break;
            return false
        }
    }
    return true
    }
;

// Do not edit below this line
module.exports = palindromes;
