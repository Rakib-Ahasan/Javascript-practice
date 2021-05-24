function print(inp){
    console.log(inp)
}

function multiplyByFive(n){
    return n*5
}

function add(a,b){
    return a+b
}
//If first function call the second composition then it's called funciton composition.
print(multiplyByFive(add(3,5)))
