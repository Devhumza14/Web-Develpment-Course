/// program 1

// const obj = {
//     harry:98,
//     aakash:12,
//     rohan:70

// }

// obj.ali=100;

// console.log(obj)
// for (const student in obj) {
    
//     const marks = obj[student];
//     console.log(`Marks of ${student} are ${marks}`);

    
    
// }


const cars = {
    bmw:2008,
    mazda:1990,
    toyota:2001,

}
cars.nissan = 2022

// console.log(cars)

// for (const company in cars) {
    
//     const model_year = cars[company];
//     console.log(`we have ${company} car of ${model_year} model`)
    
    
// }


const keys = Object.keys(cars)

for (let i = 0;i<keys.length;i++){
    const company = keys[i]; 
    const model_year = cars[company];
    console.log(`we have ${company} car of ${model_year} model`);

}