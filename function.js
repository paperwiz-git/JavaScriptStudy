'use strict'
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

//  1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb(동사)
// e.g. createCardAndPoint -> createCard, createPoint
// function is object is JS

function printHello() {
    console.log('Hello');
}

printHello();

// let word = 'ellie';
function log(message) {
    console.log(`hello ${message}`);
}

log('Dream coding ellie');

//  2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

//  3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');

//  4. Rest paramenters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');

//  5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
}
printMessage();

//  6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
//  can be assigned as a value to variable
//  can be passed as an argument to other functions.
//  can be returned by another function

//  1. Function expression(함수 표현식)
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {    // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function 
const printYes = function () {
    console.log('yes!');
}
// named function 
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");  
} 
randomQuiz('love you', printYes, printNo );
randomQuiz('wrong', printYes, printNo);


// Arrow function
// always anonymous
// const simplePrint = function () {
//     console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE: Immediately Invoked Function Expression (즉시 호출된 함수 표현식)
(function hello() {
    console.log('IIFE');
})();

//  Fun quiz time ❤
//  function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

// function calculate (command, a, b) {
//     let result;
//     if (command == 'add') {
//         result = a + b;
//         return result;
//     } else if (command == 'substract') {
//         result = a - b;
//         return result;
//     } else if (command == 'divide') {
//         result = a / b;
//         return result;
//     } else if (command == 'multiply') {
//         result = a * b;
//         return result;
//     } else if (command = 'remainder') {
//         result = a % b;
//         return result;
//     } else {
//         console.log('알수없는값');
//     }
// }
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkonwn command');
    }
}

console.log(calculate('add', 1, 2));
console.log(calculate('substract', 1, 2));
console.log(calculate('divide', 4, 2));
console.log(calculate('multiply', 4, 2));
console.log(calculate('remainder', 4, 2));
