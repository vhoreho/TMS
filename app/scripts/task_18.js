// //Задача 1

// let x = 20, y = 58, z = 42;

// function sum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }

// let result = sum(x,y,z, null, null);
// console.log("🚀 ~ result:", result)

// //Здача 2
// let sec_min=60;
// let min_hour=60;
// let hour_day=24;
// let day_year=365.25;

// let age=20;

// function calculateAgeInSeconds(a, b, c, d, e) {
//   return a * b * c * d * e;
// }

// let myAgeInSeconds= calculateAgeInSeconds(sec_min, min_hour,hour_day, day_year, age);
// console.log("Мой возраст в секундах: " , myAgeInSeconds);

// //Задача 3
// let count = 42;
// let userName = '42';

// count='42';
// userName=42;
// console.log(typeof count,userName);

//  count = String(count);
//  userName = Number(userName);
//  console.log(typeof count,userName);

// //  //Задача 4
// let a = 1;
// let b = 2;
// let c = 'белых медведей';

// function convertToString (a,b,c) {
//   return `${a}${b} ${c}`
// }
// console.log("🚀 ~ convertToString ~ convertToString:", convertToString(a,b,c))

// // console.log("Результат: ", (a + b + ' ' + c));

// //Задача 5
// let word_1="доступ";
// let word_2="морпех";
// let word_3="наледь";
// let word_4="попрек";
// let word_5="рубило";

// function calcLength(word) {
//   // if (typeof word === "string") {
//   //   return word.length;
//   // }
//   return typeof word === 'string' ? word.length : 0;
// }

// let lengthWords=sum(calcLength(word_1),calcLength(word_2),calcLength(word_3),calcLength(word_4),calcLength(word_5));
// console.log("🚀 ~ lengthWords:", lengthWords)

// //Задача 6
// let numberVariable = 5;
// let stringVariable = 'Sasha';
// let booleanVariable =true;

// function logVariableInfo(variable, name) {
//  console.log(`Variable: ${name} has type: ${typeof variable}`);
// }

// logVariableInfo(numberVariable, 'numberVariable');
// logVariableInfo(stringVariable, 'stringVariable');
// logVariableInfo(booleanVariable, 'booleanVariable');

//Задача 7
// let name =prompt("Введите имя :");
// let ages = prompt("Введите возраст :");

// console.log("Имя :" , name);
// console.log("Возраст :" , ages);

function pow(number, n) {
  let result = 1;

  for(let i = 0; i < n; i++) {
    console.log(`${i}. ${result} * ${number}. Result: ${result}`)
    result = result * number;
  }

  return result;
}

function removeSpaces (str) {
  return typeof str === "string" ? str.replace(/\s/g, "") : "Ошибка";
}
// console.log("🚀 ~ removeSpaces ~ removeSpaces:", removeSpaces('Я люблю javas cript! '))

// 8 ** 4 => 8 * 8 * 8 * 8
// 9 ** 6 => 9 * 9 * 9 * 9 * 9 * 9

function as(variable, start, finish) {
  if (typeof variable !== "string") return;

  let startIndex = variable.indexOf(start);
  let finishIndex = variable.lastIndexOf(finish);

  return variable.slice(startIndex, finishIndex)
}

let name = 'Bison';

console.log(name.indexOf('n'))
