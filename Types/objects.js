/* keys can be in quotes, but don't have to be if valid variable names (don't start with number or have invalid characters)

syntax {
    key: value,
    key: value,
    key: value
}

Two ways to get things out.  Dot notation and square brackets.

Can hold objects and arrays in addition to primitive types.

console.log(ob.name);
console.log(obj["name"]);
*/

let car = {
    make: 'Jeep',
    model: 'Wrangler',
    year: 2020,
    miles: 10_000,
    owners: ['Amy', 'Josh']
}

console.log(car.miles);
console.log(car["miles"]);
console.log(car.owners[0]);

//if object in object     console.log(car.owner[0].name)

let person = {
    fname: 'Justin',
    lname: 'Ahmann',
    fullName: function(){
        return `${this.fname} ${this.lname}`
    },
    greet: function(greetWord){
    return `${greetWord}, ${this.fname}`
    }
}

console.log(person.greet("Hello"));

//Can build/add to objects

let builderObject = {}
builderObject.name = "Justin"
builderObject["age"] = 28

console.log(builderObject);


//Look ahead to classes - special way to build an object
/*
class Dog{
    constructor(breed, age)}
    this.breed = breed
    this.age = age
    }
}

let fido = new Dog("lab", 25)
console.log(fido.breed);
