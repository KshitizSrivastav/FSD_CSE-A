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

// console.log("Hello JS");
// console.dir(document);
// let parent=document.getElementsByClassName("parent");
// console.dir(parent);
// console.log(parent[0]);
// parent[0].innerText="Helloooo";
// console.dir(document);
const div=document.getElementsByClassName("parent");
// console.log(div);
// div[0].innerText="ABES Engineering College";
// div[0].innerHTML="<h2 style=color:red>ABES EC</h2>";
// const h1=document.createElement("h1");
// h1.innerText="Element is created by DOM";
// h1.style.backgroundColor="cyan";
// h1.style.color="red";
// div[0].appendChild(h1);

// console.log(h1);

// const img=document.createElement("img");
// img.src="download.jpeg";
// img.setAttribute("height","200px");
// div[0].appendChild(img);
// div[0].removeChild(img);
// console.log(img);


// const button=document.getElementById("btn");
// console.log(button);
// const display=document.getElementById("disp");
// console.log(display);

// Traditional function calling
// function getData(){
//     console.log("Calling the function");
//     display.innerHTML="<h3 style=color:blue >Welcome to the CSE Department<h3>";
// }

// Arrow function use 
// getData=()=>{
//     console.log("Calling the function");
//     display.innerHTML="<h3 style=color:blue >Welcome to the CSE Department<h3>";
// }

// button.addEventListener("click",getData);


//JavaScript Promises
// const promise1=new Promise(
// (resolve,reject)=>{
//     let a=12;
//     if(a>10){
//         resolve("Value of a is resolved");
//     }
//     else{
//         reject("a is rejected");
//     }
// }
// );

// promise1.then((msg)=>{console.log(msg)})
// .catch(error=>{console.log(error)})
// .finally(msg=>{console.log("All resources have been consumed")});


// const promise2=new Promise(
//     (resolve,reject)=>{
//         let a=parseInt(Math.random()*100);
//         if(a>100 & a<200){
//             resolve("Value of a is resolved");
//         }
//         else{
//             reject("a is rejected");
//         }
//     }
//     );
    
//     promise2.then((msg)=>{console.log(msg)})
//     .catch(error=>{console.log(error)})
//     .finally(msg=>{console.log("All resources have been consumed")});
    
// const promise=new Promise(
//     (resolve,reject)=>{
//         resolve({name:"Kshitiz",branch:"CSE"});
//     }
// );
// promise.then((data)=>(console.log(data.name)))
// .catch(error=>{console.log(error)});


const response=fetch("https://dummyjson.com/products");
response.then(data=>{
    console.log(data);
    data.json().then(res=>{
        console.log(res.products[0].id+" "+res.products[0].title)
        const data=res.products[0].id+" "+res.products[0].title;
        div[0].innerHTML=`<h1> ${data} <h2>`
    }
)
}
)


