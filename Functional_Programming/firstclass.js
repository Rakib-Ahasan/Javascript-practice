//First Class Function

//1. A Function can be stored in a Variable 
function add(a,b){
    return a+b
}
var sum = add
console.log(sum(4,6))
console.log(typeof sum)

//2. A Funciton can be stored in an Array
var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5,3))

//3. A Funciton can be stored in an Object
var obj = {
    sum: add
}
console.log(obj)
console.log(obj.sum(7,9))

//4. We can Ceate Function as Need 
setTimeout(function (){

    console.log('I have created..')
},5000)



