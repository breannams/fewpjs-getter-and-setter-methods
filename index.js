// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
    }


    get diameter(){
        return this.radius * 2
    }

    get circumference(){
     return Math.PI * this.diameter
 
    }


    get area(){
        let sqradius = Math.pow(this.radius, 2)

        return Math.PI * sqradius
    }
    

    set circumference(newcirc){
        let piTwo = Math.PI * 2

        this.radius = newcirc / piTwo
    }

    set diameter(newDiam){
        this.radius = newDiam / 2
    }
    
    set area(newArea) {
        this.radius = Math.sqrt(newArea / Math.PI)
    }


}