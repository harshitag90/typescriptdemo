
// First Difference
var greet = "hey hi";  
var times = 5;  
if (times > 3) {  
   var greet = "Say Hello Everyone";   
}  
console.log(greet) //Output: Say Hello Everyone 


let greet1 = "hey hi";  
let totalTimes = 5;  
if (totalTimes > 3) {  
   let hello = "Say Hello Everyone";   
   console.log(hello) // Output: Say Hello Everyone  
}  
// console.log(hello) // Compile error: hello is not defined  


// Second Difference
function varDisplay(){
    var a = 10;        
    var a = 20; //a is replaced
    console.log(a);
  }
  varDisplay();

function varDisplay1(){
    let num: number = 10;        
  // let num:number = 20; //SyntaxError: 
   //Identifier 'num' has already been declared
    console.log(num);
  }
  varDisplay1();