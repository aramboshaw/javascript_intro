//forEach


let boardGames = ['monopoly', 'sorry', 'risk', 'clue']

boardGames.forEach(function (game) {
    console.log(game);
});

//Push - adds to end of array

let shoppingList = ['celery', 'limes', 'lemons']
console.log(shoppingList.push('salt'));
console.log(shoppingList);

//Pop - takes off end of array

shoppingList.pop();
console.log(shoppingList);

//Unshift - add to beginning of array

shoppingList.unshift('salt');
console.log(shoppingList);

//Shift - removes from beginning

shoppingList.shift();
console.log(shoppingList);

//Array map

console.log(shoppingList.map((item)  => item.toUpperCase()));

//Array filter

let shoppingList = ['salt', 'celery', 'limes', 'lemons'];
console.log(shoppingList.filter(item => item.startsWith('l')));


//Array find

//Array reduce

let costs = [2.00, 3.00, 4.00, 5.00];

costs.reduce((acc, currentValue) => {
    console.log(acc, currentValue)
    return acc + currentValue;
});


let costs2 = [1, 1, 1, 1, 1];
console.log(costs2.reduce((acc, currentValue) => {
    return acc + currentValue;
},10));

//includes - whether an array has a specific element, returns boolean (T or F)

console.log(shoppingList.includes('limes'));

//indexOf - searches then returns first index where it is found, -1 if not found

console.log(shoppingList.indexOf('limes'));

//array - findIndex

console.log(shoppingList.findIndex(item => item.startsWith('o')));

//.every - checks if all elements pass a test given as a function...

console.log(shoppingList.every(item => item.startsWith('c')));

//.concat() - merges two arrays and returns a new array

let fullList = shoppingList.concat(shoppingList2)
console.log(fullList);

//or

console.log(shoppingList.concat(shoppingList2));

//.slice

console.log(shoppingList.slice(1, 3));

//.splice - returns removed elements

shoppingList.splice(2,2);
console.log(shoppingList);

shoppingList.splice(2,1,'cherries');
//removes then adds

//.sort - alpha, numeric.  Default is order values as string in alpha and ascending

console.log(shoppingList.sort());

let costs = [3, 2, 67, 5];
console.log(costs.sort((a , b) => a - b));

//.reverse()

console.log(shoppingList.reverse());

//.toString

shoppingList.toString();

//.join() also accepts separator (things to add inbetween)

shoppingList.join('!, and');

//...       spread operator 

let values = [...shoppingList];
console.log(values);




