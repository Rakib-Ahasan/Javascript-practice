//First look at Closure

var b = 10
function a(){
    var x = 5
    return function(){
        console.log(x) //Jodi baire theke kono data funciton er vitore in koer tahle seta closure bole.
    }
}
var abc = a()
console.dir(abc)
