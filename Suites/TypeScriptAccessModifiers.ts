// Public, private
class Resource {  
    public resCode: number | any;  
    public resName: string | any;  
}  
  
let res1 = new Resource();  
res1.resCode = 101;  
res1.resName = "Joe Watson";  
  
console.log(res1.resCode+ " "+res1.resName);  

// Protected
class Student1 {  
    public studCode1: number;  
    protected studName1: string;  
    constructor(code: number, name: string){  
        this.studCode1 = code;  
        this.studName1 = name;  
        }  
}  
class Person extends Student1 {  
    private department: string;  
  
    constructor(code: number, name: string, department: string) {  
        super(code, name);  
        this.department = department;  
    }  
    public getElevatorPitch() {  
        return (`My unique code: ${this.studCode1}, my name: ${this.studName1} and I am in ${this.department} Branch.`);  
    }  
}

let joeRoot: Person = new Person(1, "Joe Watson", "CS");  

console.log(joeRoot.getElevatorPitch());  



// Read-only
class Company {  
    readonly country: string = "India";  
    readonly name: string;  
      
    constructor(contName: string) {  
    this.name = contName;  
    }  
    showDetails() {  
    console.log(this.name + " : " + this.country);  
    }  
   }  
      
   let comp = new Company("Xoriant");  
   comp.showDetails(); // Xoriant : India  
      
 //  comp.name = "TCS"; //Error, name can be initialized only within constructor  