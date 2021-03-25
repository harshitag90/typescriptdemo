let empTuple = ["John", 25 , "Google"];  
console.log("Name of the Employee is : "+empTuple [0]);  
console.log("Age of the Employee is : "+empTuple [1]);  
console.log(empTuple [0]+" is working in "+empTuple [2]);  

//Push
let empTuple1 = ["John", 25 , "Google"];   
console.log("Items: "+empTuple1);  
console.log("Length of Tuple Items before push: "+empTuple1.length);   // returns the tuple size  
empTuple.push(10001);   // append value to the tuple   
console.log("Length of Tuple Items after push: "+empTuple1.length);  
console.log("Items: "+empTuple1);  

//Pop
let empTuple2 = ["John", 25 , "Google",1001];  
console.log("Items: "+empTuple2);  
console.log("Length of Tuple Items before pop: "+empTuple2.length);   // returns the tuple size  
empTuple.pop();   // removed value to the tuple   
console.log("Length of Tuple Items after pop: "+empTuple2.length);  
console.log("Items: "+empTuple2);  


// We can also update, modify,clear, destruct and pass functions to tuples