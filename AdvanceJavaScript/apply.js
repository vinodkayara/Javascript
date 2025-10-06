//apply()
let obj1={
    c:200
}
let obj2={
    c:300
}

function add(x,y){
    let z=x+y+this.c
    console.log(z)
}

add.apply(obj2,[300,100])
add.apply(obj1,[100,200])