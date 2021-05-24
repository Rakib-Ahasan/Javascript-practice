//What is closure?
/*Closure is when a function is able to remember and access it's lexical scope
even when that function executing outside it's lexical scope.*/

// able to remember and access it's lexical scope

// function test(){
//     var msg = 'I am learning lexical scope and closure'
//     function sayMsg(){
//         console.log(msg)
//     }
//     sayMsg()
// }
// test()


// when that function executing outside it's lexical scope.

// function test(){
//     var msg = 'I am learning lexical scope and closure'
//    return function (){
//         console.log(msg)
//     }
// }
// var sayMsg = test()
// sayMsg()


//Closure and loop
for(var i = 1; i<=5; i++){
    (function(n){setTimeout(function(){
        console.log(n)
    },1000 * n)
    })(i)
}