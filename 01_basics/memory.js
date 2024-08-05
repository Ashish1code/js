// Stack(primitive)(copy) and Heap(Non Primitive)(reference)

let myname="ashish"
let anothername=myname
anothername="rai"
console.log(myname)
console.log(anothername)


let MyObject={
    name:"ashish",
    email:"ashish@gmail.com"
}

let MyObject2=MyObject
MyObject2.name="Rai"
console.log(MyObject.name)
console.log(MyObject2.name)
