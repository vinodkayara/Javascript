//Spread Operator

//...<object name>
//or
//...<array name>

// it is use dto copy the properties of one object into another objectand it is used to copy elements of one array into another

//example


let ob1={
    name: "vinod",
    id:18,
    ciry:"Delhi"
}

let ob2={...ob1,
    email:"vinod@gmail.com",
    gender: "male"
}

console.log(ob2)

//in array
let arr=[1,2,3,4,5,6]

let arr1=[...arr,7,8,9]

console.log(arr)