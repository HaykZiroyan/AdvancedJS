/*
16.0 Given an array of cars with properties like make, model, and year, print out the car's details in a
readable format for given care make.
*/

const cars = [
    {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    },
    {
        make: "Honda",
model: "Civic",
year: 2023,
},
{
make: "Ford",
model: "Mustang",
year: 2021,
},
{
make: "Toyota",
model: "Camry",
year: 2023,
},
{
make: "Chevrolet",
model: "Silverado",
year: 2022,
},
{
make: "Toyota",
model: "Rav4",
year: 2023,
},
];

function printCar(type) {
    
    let details =  ""
    for (const elem of cars) {
        // console.log(elem)
        if(elem.make === type) {
            details = ` make: ${elem.make},\n model: ${elem.model},\n year: ${elem.year}`;
        }
    }
    return details
}

console.log(printCar("Chevrolet"))