// // // Task 1
// // let name = 'Vlad';
// // let student = name;

// // console.log("1. " + name, student)

// // // Task 2
// // let text = 'Hello';
// // let counter = 100500;
// // let isOpen = true;
// // let someValue = null;

// // let typeText = typeof text;
// // let typeCounter = typeof counter;
// // let typeIsOpen = typeof isOpen;
// // let typeSomeValue = typeof someValue;

// // console.log("2. " + typeText, typeCounter, typeIsOpen, typeSomeValue);

// // // Task 3
// // console.log("3. ")
// // console.log(String(5))
// // console.log(String(-2))
// // console.log(Boolean('Some string'))
// // console.log(Boolean(''))
// // console.log(Boolean(' '))
// // console.log(String(0))
// // console.log(String(NaN))
// // console.log(Number(false))
// // console.log(Number('Hi'))
// // console.log(Boolean(-25))
// // console.log(+' ')
// // console.log(Number(' \n \t '))
// // console.log(String(undefined))
// // console.log(+null)
// // console.log(Boolean(undefined))
// // console.log(Number(undefined))

// // // Task 4
// // let firstName = prompt("Введите имя: ");
// // let lastName = prompt("Введите фамилию: ");

// // let fullName = firstName + " " + lastName;
// // let alternativeFullName = `${firstName} ${lastName}`

// // alert(`Привет, ${alternativeFullName}!`);

// // // Task 5
// // let salaryPavel = 1500,
// //     salaryOlga = 1200, 
// //     salaryMark = 2100;

// // let totalSalary = salaryMark + salaryOlga + salaryPavel;

// // alert(`Общая зарплата: ${totalSalary} рублей`)

// let person = {
//   name: "Peter",
//   lastName: "Parker",
//   age: 30,
//   sex: "male",
// }

// let date = 40;
// let isMale = true;
// let text = 'что-то там';

// let newObject = { date, isMale, text };

// console.log("🚀 ~ newObject:", newObject)

// console.log(Object.keys(newObject))
// //{
// // date: date
// // }

// console.log(typeof [])

let aaa = 4;
let bbb= 3;

[a,b,c,something] = [bbb, aaa, "3124", true, {bbb,aaa}];

console.log("🚀 ~ c:", c)
console.log("🚀 ~ something:", something)

let access = 'доступ';
