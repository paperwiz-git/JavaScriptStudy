'use strict';

//  Promise is a JavaScript object for asynchronous operation.
// State: pending(대기중) -> fulfilled(이행) or rejected(실패)
// Producer vs Consumer  생산자 vs 소비자

// 1. Producer , resolve(성공), reject(실패)
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() =>{
        // resolve('ellie');
        reject(new Error('no network'));
    },2000);
});

// 2. Consumers: then, catch, finally
promise //
.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => { // 무조건 실행
    console.log('finally');
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)  // 2
.then(num => num * 3)  // 6
.then(num =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(num -1), 1000);  // 5
    });
})
.then(num => console.log(num));   // 5

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 달걀`), 1000);
        setTimeout(() => reject(new Error(`error! ${hen} => 달걀`)), 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 후라이`), 1000);
    });

getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));

getHen() //
.then(getEgg)
.catch(error => {
    return '빵';
})
.then(cook)
.then(console.log)
.catch(console.log);