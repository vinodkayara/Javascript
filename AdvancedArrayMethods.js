//forEach()

let arr=['vin',22,'vik',18,true]
arr.forEach((ele,index)=>{
    console.log(ele+" "+index)
})
 console.log("===========================")

//Map()
 arr1=[1,2,3,4,5,6,7,8,9]
let newArr=  arr1.map((ele,index)=>{
    return ele*10;
  })
  console.log(newArr)

 console.log("===========================")
//filter
let num=[101,10,35,6777,900]
let res =num.filter((ele,index)=>{
    return ele>200
})
console.log(res)

 console.log("===========================")

 //reduce()
 let arr2=[10,20,30,40,50,60,70,80,90,100]

 let callback=(prev,current)=>{
    return prev+current

 }
 let result=arr2.reduce(callback,0)
 console.log(result)
 console.log("===========================")

 //sort()
 let names=["vinod","Akhilesh","Ajay","Bhavith"]
 console.log(names.sort())

 let array=[10,2,5,17]

 let res1=array.sort(function(a,b){
    return a-b //for descending rde b-a
 })
 console.log(res1)
 console.log("===========================")


 //toString()
 let bikes=["yamaha","Bajaj","Honda","Hero"]
 console.log(bikes.toString())
  console.log("===========================")

 //delete()
 let fruits=["Mango","Grapes","Guva","Banana"]
 delete fruits[2]
 console.log(fruits)
  console.log("===========================")

//isArray()
let numbers =[1,2,3,4,4,5]
let String="Pentagon"

console.log(Array.isArray(numbers))
console.log(Array.isArray(String))