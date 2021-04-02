/*let i = 0
while(i <= 10){
    console.log(i)
    i++
}


for(let x=0; x<=10; x++){
    for(let y=0; y<=10; y++){
        console.log(x, y, x*y)
    }
}
*/
/*
let names = ["Justin", "Adam", "Kate", "Jim", "Amy"]
for (let name in names){
    let curName = names[name]
    console.log(curName)
    if (curName == "Kate"){
        break;
    }
}

console.log(curName[2]);
*/
/*
let counter = -1
while(counter <= 20){
    counter++
    if (counter % 2 === 1){
        continue
    }
}
*/

//console.log(counter);

for(let tmp = 100; tmp >= 0; tmp -= 5){
    console.log(tmp);
}

//above turned into while loop
/*
let myStart = 100
while (myStart >= 0){
console.log(myStart);
myStart -=5
}