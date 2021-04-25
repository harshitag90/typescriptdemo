// if..else
const max = 100;
let counter = 100;

if (counter < max) {
    counter++;
} else {
    counter = 1;
}

console.log(counter);


//for
for (let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 0; ; i++) {
    console.log(i);
    if (i > 9) break;
}

//while
let count = 0;

while (count < 5) {
    console.log(count);
    counter++;
}


// do..while
let d = 0;
let i = 0;
do {
    console.log(d);
    i++
} while ( i < 10);

//while
for (let index = 0; index < 9; index++) {
    
    // if index is odd, skip it
    if (index % 2)
        continue;

    // the following code will be skipped for odd numbers
    console.log(index);
}