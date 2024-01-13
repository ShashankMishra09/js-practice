//@ts-ignore
// there are  two ways you can write ts and both are shown below one is when you use :type and other is simple how you write your js code and ts can understand that it is a number if you assign the value immediately like below
// let a:number = 10;
// let a = 10;
// let x:number
// x= "55";
// let b:number = 10;
// let b = 10;
// let c:number = a + b;
// let c = a + b;
// console.log(c);
// let val:number;
// val = NaN
//  console.log(val);  // will give error
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// :any is used to stop the type checking of the typescript
// let s:any; 
// even if we don't use the :any keyword it will work fine
// function ss (){
//     return "Good day"
// }
// s = ss();
// console.log(s);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
//   Functions in type script
// simple function 
// when creating a simple function in typescript we need to specify the type of parameter otherwise it will become any and then any will become a problem 
// function add (a:number) {
//  return a+5
// }
// console.log(add(5));
// this is how you make an arrow function in typescript
// so basically we need to specify what is the type of the parameters and what the output would be (this is my observastion about the below starting level program)
// const sum = (a: number, b: number): number => {
//     return a + b;
// };
// console.log(sum(9, 9));
//////////////////////////////////////////////////////////////////////////////////////////////////
//  in the below code we are defining type alias and we are defining Variables can either be a string or a number
// type Variables = string | number; 
// let a:Variables =  55 //"55"
//////////////////////////////////////////////////////////////////////////
// array in typescript
// first one
// let x:number[] 
// x = [11,22,333]
// let y: string[] = ["ww","22"]
//  second one
// let arr:Array<string> 
// arr = ["Shashank","mishra"]
// arr.forEach(i=>{
//     i.toUpperCase()
// })
//////////////////////////////////////////////////////////////////////////////////////
// this is how we define object in type script
// first one
// type Obj={
//     age: number;
//     name: string;
//     gender?: string
// we can use ? sign in case the value might not be provided so even if gender not provided it will not throw any error
// }
// const obj1:Obj ={
//     age: 55,
//     name: "sam",
//     gender: "male",
// }
// const obj2:Obj ={
//     age: 55,
//     name: "sam",
// }
// second one
// interface Obj  {
//     age: number;
//     name: string;
//     gender?: string
// }
// type Fun = (a:number,b:number) => number
// interface NewObj extends Obj {
//     canDrink: boolean;
//     // funct:(a:number,b:number) => number
//     // or 
//     funct: Fun
// } 
// this is how we can extend the interface and add new object values to the existing values it is like inheritance thing
// const obj1:Obj = {
//    age: 11,
//    name: "lal" 
// }
// const obj2:NewObj= {
//     canDrink : false,
//     name : "Ramm",
//     age : 11,
//     funct(a,b) {
//         let c = a+b
//         return c;
//     },
// }
// obj2.funct(10,10)  
// this is how we call a function which is defined in the object
////////////////////////////////////////////////////////////////////////////////
// functions in ts
// type Func = (n:number, m:number, l?:number) => number
// function with array
// type Func = ( ...m:number[] ) => number[]
// const fun:Func = (...m) =>{
//     return m;
// }
// fun(44,55,66)
// const add:Func = (n,m,l)=>{
//     if(typeof l == "undefined")  return l=n*m 
//     return l = n*m*l;
//     // when l is undefined then we can't use l in the operatin so we have to put a condition
// }
// add(2,3)
// function add (n:number):number{
//     return 12
// }
// function with objects
// type Obj = {name:string,age:number,profession:string,no:number,readonly id:string}
// readonly element cannot be changed 
// const funObj = (human:Obj) => {
//     console.log(human);
// }
//  const me:Obj = {
//     name: "Shashank",
//     age: 22,
//     profession: "jobless",
//     no : 7307853223,
//     id:"gfdfghfghxfgghncfyguhn"
//  }
//  const tanu:Obj = {
//     name: "Sakshi",
//     age: 20,
//     profession: "student",
//     no : 9918730493,
//     id: "jhgfdrtyujhdrtu"
//  }
//  funObj(me)
//  funObj(tanu)
// type themeMode = "light" | "dark"
// const errorHandler = ():never =>{
//     throw new Error();
// }
// const mode:themeMode = "light"
/////////////////////////////////////////////////////////////////////////////////////////////////////
// main things means classes 
// in typescript classes have access modifiers while in js they are not present and they are used as they are used in c++ so i'm not gonna cover it here you can write it like simply specifying public private and protected in front of you variable
// class Human{
//     age;
//     name;
//     constructor(age:number,name:string){
//         this.age = age
//         this.name = name
//     }
//     get getMyAge(): number {
//         return this.age
//     }
//     set changeAge(newAge:number) {
//          this.age = newAge
//     }
// }
// const me = new Human(20,"Shashank")
// me.changeAge = 50;
// class You extends Human {
//     verified:boolean;
//     constructor(age:number,name:string,verified:boolean){
//         super(age,name)   
//          // Constructors for derived classes must contain a super call. which is for the parent class
//          this.verified = verified
//     }
// }
// const tanu = new You(20,"Sakshi",true)
// console.log(tanu.name);
///////////////////////////////////////////////////////
// dom manipulation
// type assertion
// below are three ways in which we can manipulate dom if we don't do type assertion then we have to use ? sign where we are using onclick function
// const btn = document.getElementById("btn") as HTMLElement
// const btn =<HTMLElement> document.getElementById("btn") 
// const btn = document.getElementById("btn")!
// btn.onclick
// so in case the tags that contain properties are needed to be specified or we can use queryselector and ! (not null) mark to use img
// const img = document.getElementById("image") as HTMLImageElement
// const img = document.querySelector("img")!
// img.src
var form = document.getElementById("form");
var input = document.querySelector("form > input");
form.onsubmit = function (e) {
    e.preventDefault();
    console.log(input.value);
    input.value = " ";
};
