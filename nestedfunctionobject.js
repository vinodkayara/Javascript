//how to add function inside a object

let person={
    name:"Vinod",
    age:22,
    height:160,
    city:"bengaluru",
    play:function(){
        console.log(this.name+" is playing for RCB")
    },
    gender:"male"
}

console.log(person)
person.play()


//how to retrive only keys from objects
let x =Object.keys(person)
console.log(x)

//how to retrive values from objcets

let y=Object.values(person)
console.log(y)

Object.seal(person)
delete person.age//not allowed

console.log(person)

//how to exectute Object.assign() method?

let target={a:1}
let source={b:2,c:3}

Object.assign(target,source)
console.log(target)
