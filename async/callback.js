'use strict';
// 1. 동기와 비동기
// JavaScript is synchronous. 동기
// Execute the code block by order after hoisting.
// hoisting: var, function declaration(함수선언) 자동으로 제일 위로 끌어 올리는것
console.log('1');
setTimeout(function(){   // Asynchronous 비동기
    console.log('2');   // 나중에 다시 불러줘 ( Callback 함수)
}, 1000);
setTimeout(() => console.log('2'), 1000);
console.log('3');


// Synchronous callback 동기적 콜백
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));


//  Asynchronous callback  비동기적 콜백
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
};
printWithDelay(()=> console.log('async callback'),2000);