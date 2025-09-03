function add(){
    let x=10;
    let y=20;
    console.log(x+y)
}
add();


function add1(x,y){
    let z=x+y;
    console.log(z)

}
add1(100,50);



function Details(name,age,city){
    console.log(name);
    console.log(age);
    console.log(city);

}
Details('virat',21,'bengaluru');
Details('Sachin',10);

//Creating object by using object literals
let book={
    name:'the great vinod',
    price:2000,
    voulme:2,
    av:true
}
console.log(book)


//by using instance of object 
let bike =new Object()
bike.name='kawasaki'
bike.price=900000
bike.model=2025
console.log(bike)

//by using object constructor
function emp(id,name,salary){
    this.id=id;
    this.name=name;
    this.salary=salary;
}
e= new emp(171,"vin",5000)
console.log(e.id+" "+e.name+" "+e.salary);



//access
console.log(book['price'])

//update
book.name="bikas"
console.log(book.name)

//insert
book.color="blue"
console.log(book)
book.size=100
console.log(book)

//delete
delete book.size
console.log(book)
