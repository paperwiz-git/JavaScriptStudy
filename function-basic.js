'use strict';

// 함수 선언
function doSomething(add) {
    console.log(add);
    const result = add(2, 3);
    console.log(result);
};

function add(a, b) {
    const sum = a + b;
    return sum;
}

// 함수 호출
doSomething(add);

// const result = add(3,2);
// console.log(result);

// 변수 타입
// number, string, boolean, null, undefined
let number = 2;
let number2 = number;


// object
let obj = {
    name: 'ellie',
    age: 5,
};



console.log(obj);

// json 변환 
let json = JSON.stringify(obj);
console.log(json);

// object로 변환
let obj2 = JSON.parse(json);
console.log(obj2);
// 만약 네가 오후 네 시에 온다면, 나는 세 시부터 행복해지기 시작할 거야

function add(num1, num2) {
    return num1 + num2
};

function divide(num1, num2) {
    return num1 / num2;
}

function surprise(operator) {
    const result = operator(1, 3);
    console.log(result);
};

surprise(add);
surprise(divide);

// false: 0, -0, '', null, undefined
// true: -1, 'hello', 'false'
let num; // undefined
if (num) {
    console.log('true');
} else {
    console.log('false!')
}; 


