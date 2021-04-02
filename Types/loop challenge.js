/*

fizzbuzz.js

for a range of numbers (1...to 100):
if div evenly by 3, fizz
by 5, buzz
3 & 5 fizzbuzz
otherwise number

My attempt: 

for(let i=1; i <= 100; i++){
    if (i /= 3 && = 0 ){
   console.log(fizz);
}else if(i %= 5 || 0){
    console.log(buzz);
}else if(i  ){
    console.log(fizzbuzz);
}else if(i ){
    console.log(i);
}

Solution:

for(let i=1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    }else if (i % 5 === 0){
        console.log("buzz");
    }else if (i % 3 === 0){
        console.log("fizz");
    }else  {
        console.log(i)
    }
}


let x = 1
while(x <= 100){
    switch(true) {
        case x % 15 == 0:
        console.log("fizzbuzz");
        case x % 3 == 0:
        console.log("fizz");
        case x % 5 == 0:
        console.log("buzz");
        break;
    }
}
*/


for(let z = 1 ; z <= 100; z++){
    (z % 3 === 0 && z % 5 === 0) ? console.log("fizzbuzz")
    : (z % 5 === 0) ? console.log("buzz")
    : (z % 3 === 0) ? console.log("fizz")
    : console.log(z)
}

