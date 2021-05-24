//Object oriented programming is a paradigm based concept.
//Jokhon kono function object er moddhe thake tokhon setake method bole.

var rect = {
    width: 10,
    height: 20,
    
    calculateArea: function(){
        return this.width * this.height
    },
    calculateRange: function(){
        return 2*(this.width+this.height)
    }
}
var area = rect.calculateArea()
var range = rect.calculateRange()
console.log(area)
console.log(range)

//class
class Rect{
    constructor(width,height){
        this.width = width
        this.height = height
    }
    calculateArea(){
        return this.width * this.height
    }
    calculateRange(){
        return 2*(this.width+this.height)
    }
}
var rect = new Rect(10 ,30)