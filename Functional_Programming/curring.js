function add(a,b,c){
    return a+b+c
}
//add(12,43,34)
function curring(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

var result = curring(5)(7)(15)
console.log(result)