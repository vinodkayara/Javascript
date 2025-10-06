//bind()
let obj1={
    c:100
}

let obj2={
    c:400
}

function sub(x,y){
    let z=x-y-this.c
    console.log(z)
}


//1
let  res1=sub.bind(obj1)
sub(100,30)
//2
let res=sub.bind(obj2,300,200)
res()


//3
sub.bind(obj1)(100,200)