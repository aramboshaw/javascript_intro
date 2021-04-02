//Let Const Var
let x = 5
//const favNum = 42 

//const favNum = 50 //const can't be reassigned

//var z = 10 //These are bad, ignored at block level
//y = 5 // don't use this to create variable

x = 9

//can reassign x like this x = 9 since it has been declared/initialized

//Scope

if(true) {
     let x = 8
    console.log(x)
}
console.log(x)

//let is better than var because it exposes to global 

for (let i = 0; i < 0; i++){
    console.log(i)
}

