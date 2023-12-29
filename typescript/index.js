//@ts-ignore
// there are  two ways you can write ts and both are shown below one is when you use :type and other is simple how you write your js code and ts can understand that it is a number if you assign the value immediately like below
// let a:number = 10;
// let a = 10;
// let b:number = 10;
// let b = 10;
// let c:number = a + b;
// let c = a + b;
// console.log(c);
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
// so basically we need to specify what is the type of the parameters and what the out would be (this is my observastion about the below starting level program)
// const sum = (a: number, b: number): number => {
//     return a + b;
// };
// console.log(sum(9, 9));
