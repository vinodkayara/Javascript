//this keyword
//this is a special keyword ij js which will point to current object

//we can change reference of this keyword by using three predifined functions

//they are

//1.call()
//2.apply()
//3.bind()

let person={
    name:"virat",
    age:36,
    city:"mumbai",
    eat:function(){
        console.log(this.name+" is eating");


    },
    details:function(){
        console.log(`I am ${this.age} iam  from ${this.city}`)

    },
    sleep:function(){
        console.log(`${this.name} is sleeping`)
    }
}

console.log(person.city)
person.details()

///
function add(x,y){
    let z=x+y+this.city
    console.log(z)

}
add(200,300)