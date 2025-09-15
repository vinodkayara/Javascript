//STRING METHODS

//charAt()

let str="hello Vinod hello"
console.log(str.charAt(1))

console.log("==============================")

//toLowerCase()

console.log(str.toLocaleLowerCase())
console.log("==============================")

//toUpperCase()
console.log(str.toUpperCase())

console.log("==============================")

//substtring()
console.log(str.substring(0,4))
console.log("==============================")

//slice()
console.log(str.slice(0,4))
console.log(str.slice(4))
console.log(str.slice(-3))

console.log("==============================")

//replace
console.log(str.replace("hello","hii"))

console.log("==============================")

//replaceAll()
console.log(str.replaceAll("hello","hii"))

console.log("==============================")

//concat()
let str1="hii "
let str2=" vinod"
console.log(str1.concat(str2))

console.log("==============================")

console.log(str1.trim()+"hii")
console.log("==============================")