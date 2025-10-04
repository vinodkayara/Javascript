//Asynchronous programming


// it id a programming paradigm tht allows tasks to be executed concurrently ,without blocking the main thread of execution , 
// This approach is particularly  useful 
// when dealing with operations that might take time to complete ,such as network requests ,
// file  I/O ,or ,timers allowing the program to continue running other tasks while waiting for the operation to complete.
//Asynchronus programming can be done by using timers ,promises,async and await


//synch programming

console.log("Statement-1")
console.log("statement-2")
console.log("statement-3")

console.log("======================")

//asynch programming
console.log("Statement-1")
setTimeout(()=>{
    console.log("Statement-2")
},2000)
console.log("Statement-3")

//Promises in Javascript
//these are the way to handle the asynchronus operation 
//a promise is a java script thar links producing  code and consuming code that represent 
//  a value may be  available now  or in the fututre or never 


//the promises object can bee in any 3 states 

//1.pending
// 2.fullfilled
// 3.rejecteg

let promDemo=new Promise ((resolve,reject)=>{
    if(false){
        resolve('Promise Fullfiled')
    }else{
        reject('Promise Rejected')
    }
})
//fetch()

//handling promises
promDemo.then((res)=>{
    console.log(res)

    }).catch((error)=>{
    console.log(error)

})

//APi call

//Fetch:
fetch('https://fakestoreapi.com/products/1')//make api all
.then((res)=>res.json())  //return promises fullfill
 .then((jsondata)=>{
    console.log(jsondata)
 })//fullfill
 .catch((error)=>{
console.log(error+ " promise failed")
 }) //rejected
 

//asysnch 
 async function fun1(){
let response=await fetch('https://jsonplaceholder.typicode.com/todos/1')

let jsondata= await response.json();

console.log(jsondata)

let result=jsondata;

console.log(result)
 }
fun1();