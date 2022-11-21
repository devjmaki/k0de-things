console.log('Class Based Object Blueprint Activity');

//Step 1: Create a template
class userWeight{
    constructor (name, kilograms, pounds)
    {
        this.name = name;
        this.kilograms = kilograms;
        this.pounds = pounds;
    }
}

//Step 2: Instantiate an object using new keyword

const jellyWeight = new userWeight("Jelly", 59.87, 132);
console.log(jellyWeight);

jellyWeight.name = "Jelly";
jellyWeight.kilograms = 59.87;
jellyWeight.pounds = 132;

const pikachuWeight = new userWeight("Pikachu", 6, 13);
console.log(pikachuWeight);

pikachuWeight.name = "Pikachu";
pikachuWeight.kilograms = 6;
pikachuWeight.pounds = 13;

// // create a function converting kg to lbs

function convertWeight(kilograms){
    return {
        pounds: Math.round(kilograms * 2.20)
    }; 
}

//create a function to display weight

function displayWeight(userWeight){
    console.log(`${userWeight.name}'s weight in lbs is ${userWeight.pounds}.`);
}
