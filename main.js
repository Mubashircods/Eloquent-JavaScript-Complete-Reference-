console.log(typeof 4.5)
// --> number

console.log(typeof "x")
// --> string

// --> For new line and tabs use \n and \t. For example;
console.log("Favorite Langugage\n\tPython\n\tJavascript\n\tC++")

// --> For mathematics;
console.log(-(10 - 2))
// --> -8

//Bolean Operations
console.log(8 > 5)
// --> true

console.log(8 < 5)
// --> false

console.log("Egypt" > "ame")
// --> true

console.log("Apple" == "Apple")
// --> true

console.log(NaN == NaN)
// --> false



// Logical Operators

// The && operator represent logic And. For example;
console.log(true && false)
// --> false
console.log(true && true)
// --> true

console.log(3 == 3 && 10 * 10 > 80)
// --> true
console.log((8+2) * 10 == 100 && 1 * 100 == 100)
// --> true
console.log((8+4) * 10 == 100 && 1 * 100 == 100)
// --> false


// The || operator represent logic OR. for example;
console.log(true || false)
// --> true
console.log(false || false)
// --> false
console.log(true || true)
// --> true

console.log(5+3+1 == 5+4 || 5-2 == 5)
// --> true
console.log(7-5 == 3 || 8 * 10 == 100)
// --> false
console.log(8 * 10 == 80 || 8 * 3 == 24)
// --> true

/*The ! operator represent logica Not. It is a urinery operater.
It provide value againt the logic OR & And.
For example*/

console.log(!(5>2))
// --> false
console.log(!(7-5 == 2 && 1+2 == 3))
// --> false
console.log(!(7-4 == 2 && 1+2 == 3))
// --> true


// This is ternery operator.When it is true it give middle valur and false then give right side value.
console.log(true ? 7:21)
// --> 7
console.log(false ? 1:2)
// --> 2

// Type conversion.
console.log("5" + 1)
// --> 51
console.log("5" - 1)
// --> 4
console.log(null * 8)
// --> 0
console.log("five" * 2)
// --> NaN
console.log(false == 0)
// --> true
console.log(true == 1)
// --> true
console.log(true == 0)
// --> false
