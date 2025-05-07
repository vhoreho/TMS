// const car = {
//   name: "BMW",
//   model: "X7",
//   "29": 29,
//   "Year of creation": 2025,
//   getInfo: function() {
//     return `${this.name} created in ${this.factory.country}`;
//   },
//   factory: {
//     country: "Germany",
//     region: "Berlin",
//     address: "Ritterstrasse, 24"
//   }
// }

// const car2 = car;

// car.name = 'Peugeot';
// car.model = '407';

// const car3 = Object.assign({}, car);

// const car4 = {...car};

// const {getInfo, ...tempCarData} = car;

// const car5copy = structuredClone(tempCarData);

// car5copy.factory.country = "China";
// car5copy.name = "Geely"
// car5copy.getInfo = getInfo;

// car3.name = 'Renault'

// console.log(`Car1: ${car.getInfo()}`)
// console.log(`Car3: ${car3.getInfo()}`)
// console.log(`Car5: ${car5copy.getInfo()}`)

// // let a = 15;
// // let b = 10;

// // [a, b] = [b, a]; 



// // console.log(car5copy);

// const carValues = Object.values(car);
// const carKeys = Object.keys(car)

let username = 'Ulad', password = 'Qwerty';

const creds = { username, password }

console.log("🚀 ~ creds:", creds)

let score = "12:45";
let splittedScore = score.split(":")
let sumScore = +splittedScore[0] + +splittedScore[1];


console.log("🚀 ~ sumScore:", sumScore)
console.log("🚀 ~ splittedScore:", splittedScore)


