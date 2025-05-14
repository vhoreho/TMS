// function calcSum () {
//   console.log("Function declaration", this)
// }

// const calcSumExpression = function (a,b) {
//   console.log("Function expression", this);

//   if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   }
// };

// const calcSumArrow = (a, b) => {
//   console.log("Arrow function", this);

//   return typeof a === 'number' && typeof b === 'number' ? a + b: null
// };

// const staffSalaries = {
//   peter: 3000,
//   max:6000, 
//   carl: 4000,
//   calcAverageSalaries: function () {
//     console.log("calcAverageSalaries", this)
//   },
//   calcAverageSalariesArrow: () => {
//     console.log("calcAverageSalariesArrow", this)
//   }
// }

// // staffSalaries.calcAverageSalaries();
// // staffSalaries.calcAverageSalariesArrow();

// // calcSum();
// // calcSumExpression(3,5)
// // calcSumArrow(3,5);

// const processData = (data, callback, callbackAlternative) => {
//   console.log('Обработка данных:', data);

//   data?.password === 'qwerty'? callback(data) : callbackAlternative()
// }

// const callbackFunction = (data) => console.log("Данные успешно обработаны", data);

// const callbackAlternativeFunction = () => console.log('Пароль не правильный');

// const credentials = {username: "John", password: "qwerty"};

// // processData(credentials, callbackFunction, callbackAlternativeFunction);

// // Foreach
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const persons = [
//   {
//     name: "Peter",
//     surname: "Parker"
//   },
//   {
//     name: "Carl",
//     surname: "Does"
//   },{
//     name: "asdas",
//     surname: "sadasd"
//   },{
//     name: "asdasa",
//     surname: "Daaaaoe"
//   },{
//     name: "asdasd",
//     surname: "Dasdasdoe"
//   },
// ]

// let arrayMultiple = [];

// const multipleNumber = (value, result) => result.push(value * 2);

// array.forEach((value) => multipleNumber(value, arrayMultiple));

// const mappedNumbers = array.map((value) => value * 2);

// const sum = array.reduce((accum, value) => accum + value, 0);

// const filteredNumbers = array.filter((value) => value % 2 === 0);

// const foundNumber = array.find((value) => value === 1);

// const foundPeterParker = persons.find((value)=> value.name === "Peterasda");

// console.log("🚀 ~ foundPeterParker:", foundPeterParker)
// console.log("🚀 ~ foundNumber:", foundNumber)

// console.log("🚀 ~ filteredNumbers:", filteredNumbers)

// const oddNumbers = [];

// for(const number of array) {
//   if(number % 2 === 0) {
//     oddNumbers.push(number);
//   }
// }

// console.log("🚀 ~ oddNumbers:", oddNumbers)
// // console.log("🚀 ~ sum:", sum)
// // console.log("🚀 ~ mappedNumbers:", mappedNumbers)
// // console.log("🚀 ~ arrayMultiple:", arrayMultiple)

// const greet = (name) => `Hello ${name}`

// console.log((name => `Hello ${name}`)('Bob'))

// function Car(name, model) {
//   this.name = name,
//   this.model = model
// }

// const Geely = new Car('Geely', "Atlas"), 
//       BMW = new Car("BMW", "X7"),
//       Peugeot = new Car("Peugeot", "3008");

// console.log(Geely,BMW, Peugeot);


function changeUserName (newUserName) {
  this.userName = newUserName
}

const user = {
  userName: ''
}

const bindedChangeUserName = changeUserName.bind(user);
bindedChangeUserName('Ulad')

changeUserName.call(user, 'Peter');
changeUserName.apply(user, ['Carl']);
// changeUserName.call(user, 'Peter');

console.log(user.userName)