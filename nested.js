let user={
    name:"vinod",
    id:18,
    isplaced:false,
    address:{
        city:"bangalore",
        state:"karnataka",
        pincode:560079,
        area:{
            area1:"MG road",
            area2:"1st manin"
        }
    }
}
console.log(user)

//access data 

console.log(user.isplaced)

//update

console.log(user.isplaced=true)

console.log(user.address.area.area1="vijayanagr")

//delete 
delete user.address.area.area2


console.log(user)





//how to add function inside a object

let person={
    name:"Vinod",
    age:22,
    height:160,
    city:"bengaluru",
    play:function(){
        console.log(this.name+" is playing for RCB")
    },
    gender:male
}

console.log(person)