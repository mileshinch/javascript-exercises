const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
	let total=0;
    for (let i=0; i<arr.length;i++) {
        total = total + arr[i]
    }
    return total
};

const multiply = function(arr) {
  let total=1;
    for (let i=0; i<arr.length;i++) {
        total = total * arr[i]
    }
    return total
};

const power = function(x,y) {
	let total = 1;
  for (let i = 0; i < y; i++) {
    total = total * x
  }
  return total
};

const factorial = function(x) {
	const array = Array.from({ length: x }, (_, i) => i + 1);
  let total = 1;
  for (let i = 0; i < array.length; i++) {
    total = total * array[i];
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
