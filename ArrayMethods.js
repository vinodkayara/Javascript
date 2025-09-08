let vin=['vinod',22,true,{city:"bengalur",state:"Karnataka"},45.55]
console.log(vin)

//push()
vin.push('vikas')
vin.push(true)
vin.push(18)
console.log(vin)


//pop()
vin.pop()
console.log(vin)

//unShift()
vin.unshift(1)
console.log(vin)

//shift()
vin.shift()
console.log(vin)


//IndexOf()
console.log(vin.indexOf(22))
console.log(vin.indexOf(45))

//lastIndesx()
console.log(vin.lastIndexOf(true))

//join()
console.log(vin.join())

//includes()
console.log(vin.includes('vinod'))
console.log(vin.includes('hello'))

//reverse()
console.log(vin.reverse())

//slice()
console.log(vin.slice(0,5)) //it will not alter original array
console.log(vin)

//splice()
let vik=[1,2,3,4,5,6,8,9]
console.log(vik)
console.log(vik.splice(2,4))
console.log(vik)  //it will altetr the original array

