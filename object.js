'use strict';

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all object in JavaScript are instances of Object
// object = { key : value}; 키와 밸류의 집합

// const name = 'ellie';
// const age = 4;
// Print(name, age);

//  1. Literals and properties
const obj1 = {};  // 'object literal' syntax
const obj2 = new Object();   // 'object constructor' syntax

function Print(person) {
    console.log(person.name);
    console.log(person.age);
}


const ellie = { name: 'ellie', age: 4};
Print(ellie);

// Runtime 동적으로 추가및 삭제 가능
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age:2};
const person2 = {name: 'steve', age:3};
const person3 = {name: 'dave', age:4};
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
   this.name = name;
   this.age = age;
   // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);  // object 안에 key 확인
console.log('age' in ellie);  // true
console.log('random' in ellie);    // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (let key in obj)
console.clear();
for (let key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1,2,3,4,5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
