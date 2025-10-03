//Hoisting
//hoisting is js defsult behaviour of moving variable and function to the top of their scope before execution

console.log(a)
var a=100
console.log(a)

console.log("===============")

fun ();
function fun(){
    console.log("hello")
}

console.log("===============")

// Hello() -error
var Hello=()=>{
    console.log("Hello")
}
Hello();

console.log("===============")

console.log(c)
let c=100
console.log(c)