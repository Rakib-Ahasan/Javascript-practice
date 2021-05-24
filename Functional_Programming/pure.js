//What is Pure Fuction?
//It returns the same result if given the same arguments.
//It does not cause any observable side effects.

//This is Pure Function
function sqr(n){
    return n*n
}
console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))

var n = 10
function change(){
    n =100
}
change()
console.log(n);

//Under these are not a pure function
// var point = {
//     x:45,
//     y:30
// }
// function printPoint(point){
//     point.x = 100
//     point.y = 200
//     console.log(point)
// }
// printPoint(point)
// console.log(point)
