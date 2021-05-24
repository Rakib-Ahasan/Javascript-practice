import '../styles/index.scss'

// import { sum, sub  } from './math'

// console.log('Hello Webpack 4')

// console.log(sum(10, 20))
// console.log(sub(10, 20))

alert('Yes, I have done everything perfectly.')
// var s = `fhosf fhoas jeor
// fsjl
// fsfsd
//  fs 
//     jfjsfaoi`
// console.log(s.trim())

// var age = 23
// var name = 'Rakib Ahasan'
// //console.log('My name is ' + name + 'and Age is '+ age + 'years old.')

// console.log(`My name is ${name} and I am ${age} years old. I am ${age<18 ? 'not': ''} adult.`)

// console.log(name.padStart(15,'*'))
// console.log(name.padEnd(15,'*'))

////var vs let vs const

// if(true){
//     //var a =10 //it dosen't give any error
//     let a = 10 //it give error
// }

// //console.log(a)
// for(var i = 0; i<5; i++){

// }
//console.log(i)

////Arrow function
////amora nicher jekono ek upaiye function use kortam...
////First approach
// function add(a,b){
//     return a+b
// }
// ////or this approach
// let sum = function(a,b){
//     return a + b
// }

//Make arrow function
// function add(){
//     return a+ b

// }
// let add = (a,b) =>{
//     return a+b
// }
////jodi ek line e return korte chai actually another approach
// let add = (a,b)=>a+b
// console.log(add(20,20))
// ////or more than easier 
// let sqr = x => x*x
// console.log(sqr(3))


// let  obj = {
//     name: 'Rakib Ahasan',
//     print: function(){
//         //let self = this
//         setTimeout(function(){
//             //console.log(`Hello, ${self.name}`)//bellow another approach
//             console.log(`Hello, ${this.name}`)
//         }.bind(this),1000)
//     }
// }
// obj.print()
////Again for arrow function
// let  obj = {
//     name: 'Rakib Ahasan',
//     print: function(){
//         //this is arrow function
//         //Arrow function er perosnal kono this nai se altime parent er this refer kore 
//         //be noted amora chaile kokhono baire theke call(),bind() esob method apply kore baire theke this er value dite pari na 
//         setTimeout(()=>{
//             console.log(this)
//             console.log(`Hello, ${this.name}`)
//         },1000)
//     }
// }
// obj.print()

////Default parameter

// function sqr(n=1){ //ekhaen n er value default jodi amora sqr() mddhe kono value na dei se khetre 1 return korbe.
//     return n*n
// }
// console.log(sqr(5))

////be noted jodi default parameter use kori tahole kokhonoi baire theke null ba empty string kichu patanao jabe na.na hole error dibe.
// function greet(name = 'Rakib Ahasan ',msg = 'Hello'){
//     console.log(name.length)
//     console.log(`${msg}! ${name} `)
// }
// greet()

////Custom Iterable Object
// let obj = {
//     start:1,
//     end:5,
//     [Symbol.iterator]:function(){
//         let currentValue = this.start
//         const self = this
//         return {
//             next(){
//                 return{
//                     done: currentValue > self.end,
//                     value:currentValue++
//                 }
//             }
//         }
//     }
// }
// // for(let v of obj){
// //     console.log(v)
// // }
// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())


////Rest and Spread Opereator
////Jodi kono function er parameter er moddhe use kora hoi tahole seta Rest opereator echara onno sob jaigai Spread opereator bola hobe.

////Without rest operator
// function sum(){
//     let sum = 0
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }
// console.log(sum(1,2,3,4,))

////Using rest opereator
// function sum(...rest){
//     return rest.reduce((a,b) => a+b)
// }
// console.log(sum(1,2,3,4,5))

////Spread
// let a = [1,2,3]
// console.log(...a)///...spread

// let obj ={
//     a:10,
//     b:20,
//     c:30
// }

////Enhance object
//  let a = 10,b=20
//  let obj ={
//     //  a:a,
//     //  b:b
//     a,
//     b,
//     print(){
//         console.log(this)
//     }
//  }
//  obj.print()
//  console.log(a,b)

////Destructuring 
// let person={
//     name:'Rakib Ahasan',
//     email:'rakib@gmail.com',
//     address: {
//         city: 'Dhaka',
//         country: 'Bangladesh'
//     }
// }
// let {name,email,address:{city,country}} = person
// console.log(name,email,city,country)

////Object From Entries
// let obj = {
//     a:10,
//     b:30
// }
// console.log(Object.entries(obj))

// let objArr = [
//     ['a',10]
//     ['b',30]
// ]
// console.log(Object.fromEntries(objArr))

////Symbols in Javascript ES6
////Symbols is a premitive datatype and completely unique
////Non public properties er khetre symbol khub kaje dei
// let s1 = Symbol()
// let s2 = Symbol('test symbol')
// // console.log(s1)
// // console.log(s2)
// console.log(s1 === s2)

////Iterator Basic
///ES5
// const arr = [1,2,3,4,5]
// function createIterator(collection){
//     let i = 0
//     return{
//         next(){
//             return{
//                 done: i>= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }
// let iterate = createIterator(arr)
// console.log(iterate.next())
// console.dir(iterate.next())

////Iterator with Symbol
////ES6
//const arr = [1,2,3,4,5]
// let iterate = arr[Symbol.iterator]()

// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// console.log(arr[Symbol.iterator])

// for(let v of arr){
//     console.log(v)
// }

////Generator
////Genereator ekta system ...jekono kichu k iterator banano ba jekono jaiga theke ekta iterator object return korai generator er kaj.

 /*let obj = {
     start: 1,
     end: 5,
    //  [Symbol.iterator]:function(){
    //      let currentValue = this.start
    //      const self = this
    //      return{
    //          next(){
    //              return{
    //                  done: currentValue >self .end,
    //                  value: currentValue > self.end ? undefined : currentValue++
    //              }
    //          }
    //      }
    //  }
    ////generator
    // [Symbol.iterator]: function* (){
    //     let currentValue = this.start
    //     while(currentValue <= this.end){
    //         yield currentValue++
    //     }
    // }
 }
//  let iterate = obj[Symbol.iterator]()
//  console.log(iterate.next())
//  console.log(iterate.next())
//  console.log(iterate.next())

// function* generate(){
//     yield 1
//     yield 2
//     yield 3
// }
// let arr = [1,2,3]
// let geterate = function*(collection){
//     for(let i = 0; i<collection.length; i++){
//         yield collection[i]
//     }
// }
// let it = generate(arr)
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())*/

////Set
// let set = new Set([1,2,3])
// set.add(5)
// set.add(6)
// set.add(1)
// set.add(2)
// console.log(set)
// console.log(set.size)
//set.clear()
//set.delete(5)
// set.has(5)
// console.log(set.has(5))
// console.log(set.entries())


////Map
let map = new Map([
    ['a',10],
    ['b',20],
    ['c',30]
])

map.set('d',40)
// map.delete('c')
// //console.log(map.size)
// console.log(map)
// console.log(map.get('a'))
// console.log(map.values())
// console.log(map.entries())

// for(let [k,v] of map)
// {
//     console.log(v,k)
// }

// map.forEach((v,k)=>{
//     console.log(k,v)
// })


////Weak set and Weak map are in same conscept
//let a = {a: 10},b = {b:20}
// let set = new Set([a,b])
// a = null
// console.log(set)
// let arr = [...set]
// console.log(arr[0])

// let weakSet = new WeakSet([a,b])
// a = null
// console.log(weakSet.has(b))


////Class
////Previous approach
// function Rectangle(width,height){
//     this.width = width,
//     this.height = height
// }
// Rectangle.prototype.draw = function(){
//     console.log(this)
//     console.log('Drawing...')
// }
// let rect1 = new Rectangle(12,15)


//New approach
// class Rectangle{
//     constructor(width,height){
//         this.width = width
//         this.height = height
//     }
//     //name = 'Rakib Ahasan'//plugins na hole kaj korbe na
//     draw(){
//         console.log('Drawing...')
//     }
// }
// let rect2 = new Rectangle(33,45)
// console.log(rect2)

////Static method

// class Person {
//     constructor(name,email){
//         this.name = name,
//         this.email = email
//     }
//     print(){
//         console.log(this.name,this.email)
//     }
//     static create(str){
//         let person = JSON.parse(str)
//         return new Person(person.name,person.email)
//     }
// }
// let str = '{"name":"Rakib Ahasan","email":"rakib@gmail.com"}'
// let p = Person.create(str)
// console.log(p)
// p.print()

////This keyword
// 'use strict'
// function Shape(){
//     this.draw = function(){
//         console.log(this)
//     }
// }

// let s1 = new Shape()
// let anotherDraw = s1.draw()
// anotherDraw()

////Jodi kono property k unique ba private korte chai tahole symbol keyword ta use korte hobe 
//// const _name = Symbol()
////implement korar somoy .. this[_name] = name

////abar weakmap diyeo data k private kora jai..
//// const _name = new WeakMap()
////Implement _name.set(this,name)

////jodi kono property get korte chai tobe .. get name(){return _name.get(this)}

////Inheritance in ES6


import Rectangle from './Rectangle'
let r = new Rectangle(4,6)
r.claculate()
r.draw()
console.log(r)
