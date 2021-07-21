const user = {
    name: "Mike",
    age: 30,
};

// Object.assign({초기값}, 복사할 객체); 객체를 복사할때 사용하는 명령어
const user2 = Object.assign({}, user); 

user2.name = "ellie";
console.log(user);
console.log(user2);

// Object.keys() 키 출력
const result = Object.keys(user);
console.log(result);

// Object.values() 값 출력
const result2 = Object.values(user);
console.log(result2);

// Object.entries() 키와 값을 배열로 반환
const result3 = Object.entries(user);
console.log(result3);

// Object.fronEntries() 키와 값 배열을 객체로 반환
const result4 = Object.fromEntries(result3);
console.log(result4);