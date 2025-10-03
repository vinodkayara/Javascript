//Destructing of Array or 0bject
//it is a tecnique in javascript to unpack properties or elements from object or array and assigning variables

//example : object destructing

let person={
    name :"virat",
    age:36,
    city:"Bengaluru",
    Gender:"male"


}
console.log(person)

//old approach
// let name=person.name
// let city=person.city
// let age=person.age
// console.log(name);
// console.log(age);

// new approach
const {name,age,city,Gender}=person
console.log(name);
console.log(age);

//Destructing array

let numbers=[10,20,30,40]
console.log(numbers)

const [ele1,ele2,ele3,ele4]=numbers
console.log(ele3)
console.log(ele2)