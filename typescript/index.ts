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

// const form = document.getElementById("form") as HTMLFormElement
// const input = document.querySelector("form > input") as HTMLInputElement


// form.onsubmit=(e:SubmitEvent)=>{
//     e.preventDefault();
//     console.log(input.value);
//     let name = input.value
//     alert(`hello ${name}`)
//     input.value = ""
//     const h1 = document.createElement("h1")
//     h1.textContent = `hello ${name}`
//    const body = document.querySelector("body") as HTMLBodyElement
//    body.append(h1)    
// }

////////////////////////////////////////////////////////////////////////////////

// interface Person {
//     name:string
//     email:string
// }

// const obj:Person = {
//     name:"Sam",
//     email:"shashank@gmail.com"
// }

// const getName = ():string=>{
//     return obj.name
// }

// const getEmail = ():string=>{
//     return obj.email
// }

// const getData = (key:keyof Person):string=>{
//     return obj[key]
// }

//////////////////////////////////////////////////////////////////////////////////

//  Type Utility

// Partial

// this utility makes the properties optional

// type User = {
//     name:string,
//     num:number
// }

// type User2 = Partial<User>
// **************************************************** //
// Required  "it is opposite of required"

// type User = {
//     name?:string,
//     num?:number
// }

// type User2 = Required<User>

// ***************************************************** //

//  Readonly  "makes the properties only readable not writeable "

// type User = {
//     name:string,
//     num:number
// }

// const user2:Readonly<User> = {
//     name: "sam",
//     num:8
// }

// ****************************************************** //

// Record<keys,type> 

// type User = {
//     num: number;
// };

// type UserName = "Sam" | "Dean" | "Bobby" | "Cas"

// const emp: Record<UserName, User> = {
//     Sam:{num:88}
// };

// ****************************************************** //

//  Pick<type, keys>

// we can pick what we want what we dont

// type lol ={
//     readonly id:string,
//     user:string,
//     joke:string,
//     laughs:number,
// }

// type choose = Pick<lol,"joke" | "laughs">

// ****************************************************** //

// Omit<type,keys>

// opposite of pick leave the selected

// type lol ={
//     readonly id:string,
//     user:string,
//     joke:string,
//     laughs:number,
// }

// type choose = Omit<lol,"joke" | "laughs">


// ****************************************************** //

// Exclude<type,keys>

// exclude the type selected

// type lol = string | boolean | number

// type choose = Exclude<lol,string>

// ****************************************************** //


// Extract

// it does opposite of the exclude and extract only  mentioned

// type lol = string | boolean | number

// type choose = Extract<lol,string | boolean>

// ****************************************************** //

// Nonnullable

//just tells its name

// type lol = string | boolean | number

// type choose = NonNullable<lol>

// ****************************************************** //

// parameters<>type

// gives parameters as array

// const myF = (a:number,b:number) =>{
//     return a+b
// }

// type fun  = Parameters<typeof myF>

// ****************************************************** //

// ConstructorParameters<Type>

// tells the type of constructer parameter

// class SampleClass {
//     constructor(public s:string,public p:string){}
// }

// type test = ConstructorParameters<typeof SampleClass>

// ****************************************************** //

// ReturnType<Type>

// tells the return type of a function

// const myF = (a:number,b:number) =>{
//     return a+b
// }

// type fun = ReturnType<typeof myF>

// ****************************************************** //

// InstanceType<Type>

// class SampleClass {
//     constructor(public s:string,public p:string){}
// }

// type random = InstanceType<typeof SampleClass>

// const user:random = {
//     s:"99",
//     p:"ss"
// }

///////////////////////////////////////////////////////////////////////////////////////////

//  Generics

const fun = <t>(n:t):t =>{
    let i =10;
    return n
}

type Person = {
    name:string,
    age:number
}

const human: Person = {
    name:"sam",
    age:22
}

const ans = <Person>fun(human)
const ans1 = <string> fun("20")