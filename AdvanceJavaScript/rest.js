//rest parameters


//rest parameter allow a function to accept an indefineite number of arguments  as an array and also it can be applied for array or object to store elements or properties



function greet(message,...args){
    for (var x of args){
        console.log(message +" "+ x)
    }

}
greet('Hello','Raj','RIya','Virat','Vijay')


console.log("===============")

let num=[1,2,3,4,5,6]

const[ele1,ele2,ele3,...rest]=num
console.log(ele1)
console.log(ele3)
console.log(rest)

console.log("===============")

let person={
    name:'virat',
    age:20,
    city:"mangalore",
    gender:"male",
    id:19
}
const{name,age,city,...data}=person
console.log(age)
console.log(name)
console.log(data)