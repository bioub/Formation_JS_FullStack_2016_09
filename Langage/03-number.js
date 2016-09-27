// Infinity
console.log(1 / 0); // Infinity
console.log(typeof (1 / 0)); // number
console.log(isFinite(1 / 0)); // false
console.log(Number.isFinite(1 / 0)); // false (ES6)

// NaN (Not a Number)
console.log(Math.sqrt(-1)); // NaN
console.log(typeof (Math.sqrt(-1))); // number
console.log(isNaN(Math.sqrt(-1))); // true
console.log(Number.isNaN(Math.sqrt(-1))); // true (ES6)
