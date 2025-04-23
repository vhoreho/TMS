// "use strict";

console.log("Hello world from app.js");

// Task 1
// var
var name = "John";
var age = 30;
name = "Peter";

// const
const NAME_1= "John";
const AGE_1 = 30;

// let
// let name_2 = "John";
// let age_2 = 30;
// let login;
// let password = undefined;
// let email = null;
// let isSuccess = false;
// let hasArrow = true;

const person = {
  name: "John",
  _lastName: "Doe",
  age: 30,
  foot: "43",
  isFemale: false
};

person._lastName = 'DDDDD';

console.log(typeof person.name);

// Строковое преобразование
let userInfo = "Hello " + person.name + " " + person._lastName + ", age: " + person.age + ", is female - " + person.isFemale;
console.log(userInfo)
console.log(typeof userInfo)

let userNumInfo = person.age + Number(person.foot);
console.log(userNumInfo);
console.log(typeof userNumInfo);

// let
let name_2 = "John";
let age_2 = 30;
let login;
let password = undefined;
let email = null;
let isSuccess = false;
let hasArrow = true;

console.log("43" > 42)