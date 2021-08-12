// var houseKeeper1 = {
//     name: "Sarla",
//     age: 20,
//     favFood: "Chowmein",
//     gender: female
// }

function HouseKeeper (name, yearsOfExperience, cleaningRepertoire) { 
//necessary to capitalise first word of constructor function.
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
}
var houseKeeper1 = new HouseKeeper("sarla",10,["drainage", "bathroom"]);



