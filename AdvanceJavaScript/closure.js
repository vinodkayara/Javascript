// Closure in Javscript

// it is a techniqueto access of outer function variable inside inner function 

// A closure can be defined as a js feature in which the inner function has access to thr outer function  variable ,js every time a closure is created with  the creation function

//three scope claims listed as fallows
//1.access to its own scope
// 2.access to the variable of outer function
// 3.access to the global variable

function outer(){
    console.log("outer function");
    function inner(){
        var name ="virat"
        console.log("inner function")
        console.log(name)
    }
    return inner
}

let res=outer()
res()
console.log("===================")

//2

let age=40;
function outer(){
    let city="mysore"
    console.log(" Iam outer function")


    function inner(){
        var name="virat"
        console.log("Inner function")
        console.log(name)
        console.log(city)
        
    }
   return inner
}
let res1=outer()
res1()

console.log("===================")
