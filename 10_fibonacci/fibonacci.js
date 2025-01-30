const fibonacci = function(n) {
    // if n is a string convert it to a number
    n = Number(n)
    // initiate the fibonacci sequence
    let arr = [0,1];
    // if argument is 0 return 0
    if (n === 0) {
        return 0
    }  else if (n < 0) {
        return 'OOPS'
    } else {
        // iterate 26 times
        for (let i = 0; i < 27; i++) {
            // at each iteration push a new number to the end of the array
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        }
        // remove the first member of the sequence
        arr.splice(0,1)
        // return the nth member of the sequence
        return arr[n-1]
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
