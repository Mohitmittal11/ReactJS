const array=["city", "town",  "village"];
const [birth, broughtup,live]=array;
console.log(birth);
console.log(live);
const [one,,three]=array;
console.log(three);
// classes in js
class Car {
    constructor(name,address)
    {
        this.name=name;
        this.address=address;
    }
    method1()
    {
        return "this is a method";
    }
}
const obj=new Car("Mohit","Aligarh");
console.log(obj);
// Inheritence 
class Parent {
    constructor(num1,num2)
    {
        this.num1=num1;
        this.num2=num2;
    }
    methods1()
    {
        return "this is a parent class.";
    }
}
class Child extends Parent{
 constructor(num3,num4)
 {
    super();
    this.num3=num3;
    this.num4=num4;
 }
 methods2()
 {
    return "this is a child class";
 }
}
const newobj=new Child(5,3);
console.log(newobj);
console.log(newobj.methods2());
// Object Destructuring 