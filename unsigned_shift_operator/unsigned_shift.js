const a = 5;          //  00000000000000000000000000000101
const b = 2;          //  00000000000000000000000000000010
const c = -5;         //  11111111111111111111111111111011

console.log(a >>> b); //  00000000000000000000000000000001
// expected output: 1

console.log(c >>> b); //  00111111111111111111111111111110
// expected output: 1073741822

let num = 123456
console.log(num.toString(2))