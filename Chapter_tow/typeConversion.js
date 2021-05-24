var str = '1000'
var n = 10

console.log(str + n) //It's string concatation.
console.log(Number(str)+n)
console.log(Number.parseInt(str)+n)
console.log(n.toString())
//Falsy Values: '',0,null,nudefined,NaN
console.log(Boolean(''))
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))