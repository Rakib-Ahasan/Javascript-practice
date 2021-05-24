import Shape from './Shape'
class Rectangle extends Shape{
    constructor(width,height){
        super()
        this.width = width
        this.height = height
    }
    ////method overriding 
    draw(){
        console.log('Drawing form Rectangle ...')
    }
    claculate(){
        return this.width + this.height
    }
}
export default Rectangle