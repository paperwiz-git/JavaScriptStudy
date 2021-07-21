'use strict';

// Array

// 1. Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2];

const arr = [1, 2, 3, 4, 5]
console.log(arr.length); // 길이 5

// 2. Index position 
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length); //  길이 2개
console.log(fruits[0]); // 제일 첫번째 인덱스 접근방법
console.log(fruits[1]); // 접근방법
console.log(fruits[fruits.length - 1]); // 마지막 인덱스 접근방법
console.log("--------------------");

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
};

console.log("--------------------");
// b. for...of
for ( let key in fruits) {
    console.log(fruits[key]);
};
console.log("--------------------");
// c. forEach 
fruits.forEach((fruit, index) =>  console.log(fruit, index));

//  4. Addition, deletion, copy
// push: add an item to the end ( 배열 젤 마지막에 추가)
fruits.push('딸기', '봉숭아');
console.log(fruits);


// pop: remove an item from the end ( 배열 젤 마지막 값 제거)
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('딸기', '레몬');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.pop('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1, 1);  // splice(인덱스, 몇개 지울건지);
console.log(fruits);
fruits.splice(1, 1, '사과', '수박'); // 인덱스, 지울갯수, ...추가할 값
console.log(fruits);

// concat: combine two arrays
const fruits2 = ['자두', '키위'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('코코아'));  // 없는값 찾을시 '-1' 출력

// includes
console.log(fruits.includes('수박')); // true
console.log(fruits.includes('코코아'));  // false

// lastIndexOf
console.log();
console.log(fruits.indexOf('사과'));  // 첫번째값만 찾음
console.log(fruits.lastIndexOf('사과')); // 마지막에서 찾은값만 출력


