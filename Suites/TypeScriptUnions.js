var value;
value = 120;
value = "ABC";
console.log("The Numeric value of a value is: " + value);
value = "Welcome to Cross Stream Session";
console.log("The String value of a value is: " + value);
// Using union in functions
function display(value) {
    if (typeof (value) === "number")
        console.log('The given value is of type number.');
    else if (typeof (value) === "string")
        console.log('The given value is of type string.');
}
display(123);
display("ABC");
