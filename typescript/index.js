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
// obj2.funct(10,10)  // this is how we call a function which is defined in the object
