//scope in javascript

//there are two scopes in js
// 1.global scope
//2.function scope

//1.global scope: if any function or variable or class not defined insdie the block({}) then thry are said to be in global


//example 1:
var city="manglore"

function fun1(){
    console.log(city)
}
function fun2(){
    console.log(city)
}
function fun3(){
    console.log(city)
}
fun1()
fun2()
fun3()

//example

function f1(){
    var name ="vinod"
    function fn(){
        console.log(name)
        console.log("fn is called")
    }
     console.log(name)
     return fn
}
 
f1()

