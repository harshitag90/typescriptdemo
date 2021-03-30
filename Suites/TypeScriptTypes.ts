// Typescript Types
let empCode: number = 13453;             
let empName: string = "Rohan"; 
let isDone: boolean = false;   


// VOID Syntax 
let unusable: void = undefined; //not useful (no data type and we cannot initialize)
//let tempValue: void = 123;      //Error  

function helloUser(): void {  
    alert("This is a welcome message");  
    }  

 // Any
 
 function ProcessData(x: any, y: any) {  
        return x + y;  
}  
let result: any;  
result = ProcessData("Hello ", "Any!"); //Hello Any!  
result = ProcessData(2, 3); //5  




// null types
//Variable declared and assigned to null  
var nulValue = null;   
console.log( nulValue );   //output: null  
console.log( typeof(nulValue) );   //output: object   


// User-Defined Types
//Array -
var list : number[] = [1, 3, 5]; 
var list : Array<number> = [1, 3, 5];  //Generic way


//Tuple-
// Declare a tuple  
let a: [string, number];  
  
// Initialize it  
a = ["hi", 8]; // OK 


//Interface-
interface Calc {  
    subtract (first: number, second: number): any;  
}  
   

let Calculator: Calc = {  
    subtract(first: number, second: number) {  
        return first - second;  
    }  
}  


// Class-
class Student  
{  
    RollNo: number;  
    Name: string;   
    constructor(_rollNo: number, _name: string)   
    {  
        this.RollNo = _rollNo;  
        this.Name = _name;  
    }  
    showDetails()  
    {  
        console.log(this.RollNo + " : " + this.Name);  
    }  
}

// Enums-
enum Color {  
    Red, Green, Blue  
};  
let c: Color;  
c = Color.Green;  


//Functions-
//named function with number as parameters type and return type  
function add(a: number, b: number): number {  
    return a + b;  
}  

//anonymous function with number as parameters type and return type  
let sum = function (a: number, b: number): number {  
    return a + b;  
}; 


//Generics-
function identity<T>(arg: T): T {  
    return arg;  
}  
let output1 = identity<string>("myString");  
let output2 = identity<number>( 100 );  


 