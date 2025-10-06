//call()
//for this function first argumnet should be always object for which this is refered .seccond argumnet is functions accepting arguments

//example:
let obj1={
    c:100
}
let obj2={
    c:300
}


function add(x,y){
    let z=x+y+this.c
    console.log(z)
}

add.call(obj1,300,100)
add.call(obj2,50,400)