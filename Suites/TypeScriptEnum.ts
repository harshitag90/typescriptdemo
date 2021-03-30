// Numeric Enums
enum Direction {  
    Up = 1,  
    Down,  
    Left,  
    Right,  
}  
console.log(Direction);  


// String Enums
enum AppStatus {  
    ACTIVE = 'ACT',  
    INACTIVE = 'INACT',  
    ONHOLD = 'HLD',  
    ONSTOP = 'STOP'  
}  
function checkStatus(status: AppStatus): void {  
   
    console.log(status);  
}  
checkStatus(AppStatus.ONSTOP);  


// Heterogeneous Enums
enum EmpDetails {  
    IsActive = 'Yes',  
    EmpCode = 123,  
    EmpPhone = 201345989,  
    Address = 'Pune'  
}  
console.log(EmpDetails.IsActive);  
console.log(EmpDetails.EmpCode);  