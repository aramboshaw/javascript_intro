//Two ways to write a function in JS

/*
<keyword> <yourname>(<what I need to work>){
    // What I do
    return <something> // what I want to give back
}
*/

function sqr(x){
    return x*x
}

console.log(sqr(5))

//let result = sqr(5)
//console.log(result)

let aSqr = (x) => {
    return x * x //explicit return
}

let bSqr =  (x) => x * x
let cSqr = x => x * x //implicit return

//all three are valid

//Doesn't need parameters:

function greet(){
    console.log("Hello world");
}
greet();


//One parameter function:

function betterGreet(fName){
    console.log("Hello " + fName)
}
betterGreet("Justin"); //passes in one argument

let createFullName = (fName, lName) => `${fName} ${lName}`


let fullName = createFullName("Justin", "Ahmann")
console.log(fullName)