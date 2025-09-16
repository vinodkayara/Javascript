//for loop
for(let i=0;i<5;i++){
    console.log("vinod")
}

console.log("=====================")
//while

let count=0
while(count<10){
    console.log("counter value is "+ count)
    count++
}
console.log("=====================")
//do while

let count1=0
do{
    console.log("counter value is "+ count1)
    count1++
}while(count1<10);
console.log("=====================")
//for in loop 

let per={
    name:"vinod",
    age:22,
    city:"Bengaluru",
    id:101
}

for(let x in per){
    console.log(x) //keys
     console.log(per[x]) //values
}

console.log("=====================")

//for of loop

let arr=[10,20,40,33,66,99]
for(let y of arr){
    console.log(y)
}

