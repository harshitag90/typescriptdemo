
// Single Dimensional Arrays
let arr:number[];   
arr = [1, 2, 3, 4]   
console.log("Array[0]: " +arr[0]);   
console.log("Array[1]: " +arr[1]);  


// Multi Dimentional Arrays
var mArray:number[][] = [[1,2,3],[5,6,7]] ;  
console.log(mArray[0][0]);  
console.log(mArray[0][1]);  
console.log(mArray[0][2]);  
console.log();  
console.log(mArray[1][0]);  
console.log(mArray[1][1]);  
console.log(mArray[1][2]);  

//array by using the Array object.  
let array:string[] = new Array("Cross Stream Session","2021","TypeScript","Harshita");  
for(var i = 0;i<array.length;i++) {   
   console.log(array[i]);  
} 

/*Cross Stream Session
2021
TypeScript
Harshita
*/