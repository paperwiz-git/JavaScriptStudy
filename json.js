'use strict';
/* 
JSON:  JavaScript Object Notation

simplest data interchange format
간단한 데이터 교환 형식
lightweight text-based structure
가벼운 텍스트 기반 구조
easy to read
key-value pairs
used for serialization and transmission of data between the network the network connection
네트워크 연결 사이의 직렬화 및 데이터 전송에 사용
independent programming language and platform
독립적인 프로그래밍 언어 및 플랫폼
*/

// 1. object to JSON - object를 JSON으로 변환
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);
// ["apple", "banana"]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    // symbol: Symbol('id'),
    jump: () => {
        console.log(`${this.name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'name' ? 'ellie' : value;
});
console.log(json);


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);  // object로 JSON으로 변환
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);
console.log(obj.birthDate.getDate());

