//to find the even number 


//if

function FindNum(num){
    if(num%2==0){
        console.log("yes")
    }
}
FindNum(10)

console.log("==============================")

//if else 

    function oddOreven(num){
    if(num%2==0){
        console.log("yes")
    }else{
        console.log("no")
    }
}
oddOreven(11)
console.log("==============================")
//else if

function wish(message){
    message.toLowerCase()
    if(message==="gm"){
        console.log("Good Morning")
    }
    else if(message==="ga"){
        console.log("Good Afternoon")
    }
    else if(message==="ge"){
        console.log("Good evening")
    }
    else if(message==="gn"){
        console.log("Good night")
    }
    else{
        console.log("Invalid")
    }
}
wish("ga")
console.log("==============================")

//switch

function wish1(message){
switch(message){
    case "gm" :{
         console.log("Good Morning")
         break;
    }
    case "ga" :{
         console.log("Good Afternoon")
         break;

    }
    case "ge" :{
         console.log("Good Evening")
         break;
    }
    case "gn" :{
         console.log("Good Night")
         break;
    }
    default :{
         console.log("Invalid")
         break;
    }
}
}
wish1("gn")

console.log("==============================")

let firstname="sachin"
firstname.includes("virat")?console.log("my name is virat"):console.log("your name is something else")
console.log("==============================")