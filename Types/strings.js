console.log("This is text and a string.");

/* Create strings with "", '', ``, or String(). 

If you have quotations inside string you can escape with \. 

New line character (also an escape character) is \n*/

console.log('This is \nnew');

let f_name = 'Justin';
let l_name = "Ahmann";

console.log(typeof f_name)
let full_name = f_name + l_name;

/* Binary and unary arguments.  Some only take one, other two. Typeof is unary.

Concatanation +*/

console.log(full_name);

/* Template string ``  Backticks!  Allows you to plug in various things. */

//let template_full = `${f_name} ${l_name}`

//console.log(template_full);

/* Multi lines */

//let multi_line1 = 'this is one long string' + 'and I want it on many lines';

/* Dot notation using .   .slice, .length, etc.
"Instance"  instance methods for strings*/

//let concat_full = f_name.concat(l_name);
//console.log(concat.full);

let indexed_string = "Hello world";
console.log(indexed_string);
console.log(indexed_string[0]);