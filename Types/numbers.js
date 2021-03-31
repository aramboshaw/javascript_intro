let x = 5;
let y = 5.0;
let z = Number('5');
let r = Number('test');

console.table([x, y, z, r]);

console.table({x, y, z, r});

//let conv_numb = Number(str_numb);  //Creates number from string

/*
Numbers
add +
subtract -
multi *
div /
floor div (use math object, Math.floor, chopped of at whole number)
exp **
modulus % gives remainder
*/


//Debug demo

let total = 0
let i = 0
while(i <= 1000){
    if(i % 2 == 0) {
    console.log(i)
    total += i
}
i++
}

console.log(total);