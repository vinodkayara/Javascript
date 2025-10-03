//Template literals
//provides an easyway to interpolate and expression into strings
//template literals use back-ticks(``) rathar than the  quotes("") to define string

// example:
let name="vinod"
let age=37
console.log(`My name is ${name} i am ${age} years old`)

let person={
    fname:"vinod",
    lname:"Kohli",
    age:37,
    place:"Mumbai",
    deatil:function(){
        console.log(`Name is ${this.fname}${this.lname} age is ${this.age} from ${this.place}`)
    }


}
person.deatil()