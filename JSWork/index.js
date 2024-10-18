/*console.log("Hello World");
let a=12;
console.log("a="+a);
if(a>10){
    let a=30;
    console.log("Hi",a);
}
console.log("Hello",a);
*/
// let a="12";
// let b=12;
// let c=12;
// console.log(typeof a);
// console.log(typeof c);
// let sim=Symbol(122)
// console.log(typeof sim);
// let today=Date();
// console.log(today);
// console.log(typeof today);
// if(a===b){
//     console.log("Value Equal");
// }
// else{
//     console.log("Type not Equal");
// }

// function hi(str){
//     console.log("Hi function calling "+str);
// }
// hi("Kshitiz");
// let f=function hi(str){
//     console.log("Hi function calling "+str);
// }
// hi();

// function sum(a,b,c=12){
//     return a+b+c;
// }
// let total=sum(23,45);
// console.log(total);

// function cCompiler(){
// return "C Compiler";
// }

// function javaCompiler(){
// return "Java Compiler ";
// }

// function selectLanguage(clbk){
// console.log("Hi! You have selected "+clbk());
// }
// selectLanguage(javaCompiler);
// selectLanguage(cCompiler);

// function selectCompiler(str){
//     if (str=="Java"){
//     return javaCompiler();
//     }
//     else{
//         return cCompiler();
//     }
// }
// console.log(selectCompiler("Java"));
// console.log(selectCompiler("C"));

console.log("Hello JS");
console.dir(document);
let parent=document.getElementsByClassName("parent");
console.dir(parent);
console.log(parent[0]);
parent[0].innerText="Helloooo";