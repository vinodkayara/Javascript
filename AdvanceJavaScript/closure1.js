function Add(x,y){
    let z=x+y 
    console.log(z)
    function Sum(a){
        let res=z+a
        console.log(res)
    }
    return Sum
}
let res=Add(100,200)
res(300)

console.log("============")
function person(name,age ,city){
    console.log(name+" "+age+" "+city)
    function details(gender,height){
        console.log(name+" "+age+" "+city+" "+gender+" "+height)

    }
    return details
}
let details=person('virat',30,'mumbai')
details('male',5.7)