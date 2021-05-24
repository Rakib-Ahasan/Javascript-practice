// function greet(msg){
//     function greetings(name){
//         return msg + ', '+ name + '!'
//     }
//     return greetings
// }

// var gm = greet('Good Morining')
// //console.log(typeof(gm))
// var msg = gm("Rakib Ahasan")
// console.log(msg)

function base(b){
    return function (n){
        var result = 1
        for(var i=0; i<b; i++){
            result *= n
        }
        return result
    }
}

var base10 = base(10)
console.log(base10(2))