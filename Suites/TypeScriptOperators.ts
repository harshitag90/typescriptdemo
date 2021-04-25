//Arithmetic Operators
let x:number = 20;
let y:number = 30;
let z:number = x + y;
x++
y--
console.log( z );
console.log( x );
console.log(y);


// Comparison (Relational Operators)
console.log( x==30 );
console.log(x!=y); // Not equal to
console.log(x!==y); // Not identical
console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);

// Logical Operators
let condition:any = true;
let condition1:any=false;
console.log(condition&&condition1);      //false
console.log(condition&&true);   //true
console.log(condition||condition1);      //true
console.log(condition1||true);
console.log(!x);

// Bitwise Operators

let r:number = 2;

let s:number = 3;
let t:number = r&s;
console.log(t); // 2

let u:number = r|s;
console.log(u); // 3

let v: number = ~s;
console.log(u);  //-3


//Assignment Operators
let w= s+=t;  //Similarly: -, *,/,% can be used
console.log(w); // 5  



// Ternary/Conditional operators
let num:number = 16;  
let res:any = (num > 0) ? "True":"False"   
console.log(res);  

//Concatenation Operators
let message: string = "Welcome to " + "Cross Stream Session";  
console.log("Result of String Operator: " +message);  

//>> Result of String Operator: Welcome to Cross Stream Session


// Type Operators
	
let Bike= {make: 'Honda', model: 'CLIQ', year: 2018};
console.log('year' in Bike);   // Output:true

let Bike1 = { Company1: 'Honda',
             Company2: 'Hero',
             Company3: 'Royal Enfield'
           };
//delete Bike1.Company1;
console.log(Bike1);   // Output:{ Company2: 'Hero', Company3: 'Royal Enfield' }



let arr = [1, 2, 3];
console.log( arr instanceof Array ); // true
console.log( arr instanceof String ); // false



	
let message1 = "Welcome to " + "Cross Stream Session";
console.log(typeof message1);  // 
Output:
String