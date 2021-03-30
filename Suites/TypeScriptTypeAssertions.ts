let empID: any = 111;   
let empID1 = <number> empID;   
let empID2 = <string> empID;   
let empID3 = empID as boolean;   
console.log(typeof(empID1)); //Output: number  
console.log(typeof(empID2));
console.log(typeof(empID3));


interface Student {   
    name: string;   
    code: number;   
}  
let student = <Student> { };   
student.name = "John"; // Correct  
student.code = 123; // Correct  