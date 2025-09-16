//NaN

let result=0/0  //NAN
let res=0+0  //number
let b=100/"s"  //NaN
const value=Math.sqrt(-1) //NaN
let num=parseInt("5")    //5
let num1=parseInt("abc")  //NaN

let s=100-"100"

console.log(result)
console.log(res)
console.log(b)
console.log(value)
console.log(num)
console.log(num1)

let a=9
console.log(typeof a)
console.log(typeof NaN)

console.log(NaN===NaN)

console.log("===================")
//isNaN()
//Number.isNaN()

console.log(isNaN("abc"))
console.log(Number.isNaN("abc"))
console.log(Number.isNaN(NaN))