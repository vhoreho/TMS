const cars = [{
  name: "Belgee",
  model: "X50",
  yearOfCreate: 2025,
  value: 1.5
},{
  name: "Belgee",
  model: "X70",
  yearOfCreate: 2025,
  value: 2
},{
  name: "Belgee",
  model: "S50",
  yearOfCreate: 2025,
  value: 3
}];

const geely = [{
  name: "Geely",
  model: "Atlas",
  yearOfCreate: 2021,
  value: 3
},{
  name: "Geely",
  model: "Atlas Pro",
  yearOfCreate: 2024,
  value: 3
},{
  name: "Geely",
  model: "Emgrand",
  yearOfCreate: 2022,
  value: 3
}]

const belgeeX50 = {...cars[1]}
const belgee = [...cars];

const unionCars = cars.concat(geely);
const unionCarsAlternative = [...cars, ...geely];

const models = []

for (const car of unionCarsAlternative) {
  models.push(car.model);
}

// console.log("🚀 ~ models:", models);
// const lastElementOfArray = models.pop();
// const sc7Geely = models.unshift('SC7');
// const sc7Sliced = models.shift();
// console.log("🚀 ~ sc7Sliced:", sc7Sliced)
// console.log("🚀 ~ lastElementOfArray:", lastElementOfArray);
// console.log("🚀 ~ models:", models);

const reversedModelsByCycle = [];

for (let i = models.length - 1; i >= 0; i--) {
  reversedModelsByCycle.push(models[i]);
}

let atlas = "Atlas ";
atlas = atlas.trim()

console.log("🚀 ~ models:", models)
const hasAtlasValue = models.includes(atlas);
console.log("🚀 ~ hasAtlasValue:", hasAtlasValue);

const array = Array(10).fill("🦁");
const arrayFlat = [[1,2], [3,4], [5,6], [7,8]]
console.log("🚀 ~ array:", arrayFlat.flat())

const joinedArray = models.join(' 🦁 ');
// console.log("🚀 ~ joinedArray:", joinedArray)
// console.log("🚀 ~ models:", models)
// console.log("🚀 ~ reversedModelsByCycle:", reversedModelsByCycle);
// console.log("🚀 ~ reversedModels:", reversedModels);
// console.log("🚀 ~ models:", models)
// const slicedModels = models.slice(2,4);
// const splicedModels = models.splice(2,4);
// console.log("🚀 ~ splicedModels:", splicedModels)
// console.log("🚀 ~ slicedModels:", slicedModels)
// console.log("🚀 ~ models:", models)

cars[1].value = 10;

// console.log(belgee[1]);