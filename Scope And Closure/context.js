//Execution Context
 function a(){
     d()
     console.log('I am function a')
 }
 function b(){
    d()
    console.log('I am function b')
}
function c(){
    
    console.log('I am function c')
}
function d(){
    c()
    console.log('I am function d')
}

var x =100
a()
console.log('I am global')

//Execution of c function context
//Execution of d function context
//Execution of b function context
//Execution of A funciton context
//Execution of global context.


//jekono execution context 2 ta phase e ghote thake
//1.Creational phase
//2.Executional phase