////Chapter 11,12,13,14 complete.....Using these codes.
// var rect = {
//     width: 100,
//     height: 50,
//     draw: function(){
//         console.log('I am a rectangle.')
//         this.printProperties()
//     },
//     printProperties(){
//         console.log('My width is :'+ this.width)
//         console.log('My height is :'+ this.height)
//     }
// }
// rect.draw()

////Factory pattern 
// var createRect = function(width, height){
//     return{
//     width: 100,
//     height: 50,
//     draw: function(){
//         console.log('I am a rectangle.')
//         this.printProperties()
//     },
//     printProperties(){
//         console.log('My width is :'+ this.width)
//         console.log('My height is :'+ this.height)
//     }
//   }
// }
// var rect1 = createRect(10,8)
// rect1.draw()
// var rect2 = createRect(40 , 30)
// rect2.draw()

////Constructor pattern
// var Rectangle = function(width,height){
//     this.width = width
//     this.height = height
//     this.draw = function(){
//         console.log('I am a rectangle.')
//         this.printProperties()
//     }
//     this.printProperties= function(){
//         console.log('My width is :'+ this.width)
//         console.log('My height is :'+ this.height)
//     }
// }

// var rect3 =new Rectangle(10 ,20)
// rect3.draw()

////new keyword 3 ta kaj kore
////1.ekta empty object create kore
////2.ekta object er prototype er sathe connect kore
////3.object er total kichu return kore

// function myNew(constructor){
//     var obj = {}
//     Object.setPrototypeOf(obj,constructor.prototype)
//     var argsArray = Array.prototype.slice.apply(arguments)
//     constructor.apply(obj,argsArray.slice(1))
//     return obj
// }

// var rect4 = myNew(Rectangle,45,30)
// rect4.draw()

// var Rect = new Function('width','height',`this.width = width
// this.height = height
// this.draw = function(){
//     console.log('I am a rectangle.')
//     this.printProperties()
// }
// this.printProperties= function(){
//     console.log('My width is :'+ this.width)
//     console.log('My height is :'+ this.height)
// }`)

// var rect5 = new Rect(4,5)
// rect5.draw()


// function myFunc(c,d){
//     console.log(this)
//     console.log(this.a + this.b+c+d)
// }
// //Call,Apply,Bind
// myFunc.call({a: 40,b:25},10,5)
// myFunc.apply({a: 40,b:25},[3,55])
// var testBind = myFunc.bind(5,7)


////Pass by value vs Pass by reference
////call by value vs call by reference 

////Pass by value
// var n = 10

// function change(n){
//     n += 100
//     console.log(n)
// }

// change(n)
// console.log(n)

// //Pass by reference 
// var obj = {
//     a: 10,
//     b: 20
// }
// function changeMe(obj){
//     obj.a += 100
//     obj.b += 100
// }
// changeMe(obj)
// console.log(obj)

////Abstraction

// var Rectangle = function(width,height){
//     this.width = width
//     this.height = height
//     var position = {
//         x: 56,
//         y: -100
//     }
   
//     var printProperties= function(){
//         console.log('My width is :'+ this.width)
//         console.log('My height is :'+ this.height)
//     }.bind(this)

    ////jodi position method k baire theke access nite chai taole 
    // this.getPosition = function(){
    //     return position
    // }
//     this.draw = function(){
//         console.log('I am a rectangle.')
//         printProperties()
//         console.log('Position: X = '+position.x + ' Y = '+position.y)
//     }

//     Object.defineProperty(this,'position',{
//         get : function(){
//             return position
//         },
//         set : function(value){
//             position = value
//         }
//     })
// }
// var rect7 = new Rectangle(45,30)
// rect7.draw()
// rect7.position = {
//     x: 465,
//     y : -43
// }
// console.log(rect7.position)


////Inheritance
// function Person(name){
//     this.name = name;
// }
// var p1 = new Person('Rakib Ahasan')
// console.log(p1)

////Property Descritor
// var person = {
//     name: 'Rakib Ahasan'
// }
// console.log(person)

// for(var i in person){
//     console.log(i)
// }
//console.log(Object.keys(person))

// var descriptor = Object.getOwnPropertyDescriptor(person,'name')
// console.log(descriptor)

// let baseObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(baseObj,'toString')
// console.log(descriptor)

// Object.defineProperty(person,'name',{
//     enumerable: false,
//     writable : false,
//     configurable : false,
//     value : 'Amena khatun swarno'
// })

////Prototype constractor
// function Person(name){
//     this.name = name
// }
// Person.prototype.PI = 3.1416
// var p1 = new Person('Rakib')
// var p2 = new Person('Amena')
// console.log(p1)
// console.log(p2)
// console.log(Object.getPrototypeOf(p1))
// console.log(Person.prototype)

////Instance vs Prototype Members
// function Square(width){
//     //instance member
//     this.width = width 
//     this.getWidth = function(){
//         console.log('Width is '+ this.width)
//         //this.draw()
//     }
// }

// Square.prototype = {
//     //prototype member
//     draw:function(){
//         this.getWidth()
//         console.log('Draw')
//     },
//     toString: function(){
//         return 'My width is = ' + this.width
//     }
// }
// var sqr1 = new Square(10)
// var sqr2 = new Square(5)

////to get only instance member
//console.log(Object.keys(sqr1))
////or below to get all prototype and instance member
// for(var i in sqr1){
//     console.log(i)
// }

////First Prototypical Inheritance

function extend(Parent,Child){
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
}

function Shape(color){
    this.color = color

}
Shape.prototype.common = function(){
    console.log('I am common method')
}

function Square(width,color){
    Shape.call(this,color) //Its called supper call
    this.width = width
}

extend(Shape,Square)
Square.prototype.draw = function(){
    console.log('Drwaing')
}

//var shape = new Shape()
var sqr = new Square(75,'Green')
//shape -> Shape->Object
////sqr -> Square ->Object

////sqr -> Square -> Shape-> Object

function Circle(radius,color){
    Shape.call(this.color),
    this.radius = radius 

}

// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle
extend(Shape,Circle)
//// var c = new Circle(5,'red')//kaj hoi na eta

//Method overrride.
Circle.prototype.common = function(){
    //Shape.prototype.common.call(this)
    console.log('I am calling form Circile and I have overridden.')
}
var c = new Circle(4,'Black')

////Polymorphism
Square.prototype.common = function(){
    console.log('I am calling form Square and I have overridden.')
}
var s = new Shape('White')

var shapes = [s,c,sqr]
for(var i of shapes){ //ekhane in use korle key dibe r of use korle value dibe.
    i.common()
}

////Inheritance And Composition Mixing

function mixin(target,...source){
    Object.assign(target,...source)
}
var canWalk = {
    walk: function(){
        console.log('Walking')
    }
}

var canEat={
    eat: function(){
        console.log('Eating...')
    }
}
var canSwim = {
    swim: function(){
       console.log('Swiming...') 
    }
}

//var person = Object.assign({},canWalk,canEat)
//person.name = 'Rakib Ahasan'
function Person(name){
    this.name = name
}
//Object.assign(Person.prototype,canWalk,canEat)
mixin(Person.prototype,canWalk,canEat)
var person = new Person('Rakib Ahasan')
console.log(person)

function GoldFish(name){
    this.name = name
}
var fish = new GoldFish('bla bla bla')
console.log(fish)