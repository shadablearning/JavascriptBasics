let names = {
    fname: "Dillion",
    lname: "Megida"
}

console.log(names.fname);
console.log(names.hasOwnProperty("mname"));

console.log(names);


//Object.Create 
console.log('--------------Object.Create----------------------------')

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};


const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
console.log(me);
console.log('--------------New Keyword----------------------------')
//Classical Inheritance
// Shape - superclass

function DogObject(name, age) {
    this.name = name;
    this.age = age;
}
DogObject.prototype.speak = function () {
    return "I am a dog";
}  

console.log(new DogObject('Bruno',5))

let john = new DogObject("John", 45);
console.log(john);

console.log('------------------This technique is referred to as PROTOTYPE CHAINING---------')

console.log('--------------What is class ?---------------');
class Animals {
    constructor(name, specie) {
        this.name = name;
        this.specie = specie;
    }

    sing() {
        return `${this.name} can sing`;
    }
    dance() {
        return `${this.name} can dance`;
    }

}

// function Animals(name,species)
// {
//     this.name=name;
//     this.species=species;
// }

let bingo = new Animals("Bingo", "Hairy");
console.log(bingo);






