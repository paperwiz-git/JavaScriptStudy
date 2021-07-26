'user strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

//  1. Class declarations (클래스 선언)
class Person {
    // constructor (생성자)
    constructor(name, age) {
        // fields (속성)
        this.name = name;
        this.age = age;
    }
    // method (행동)
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);  // Object 생성
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//  2. Getter(획득자) and setters(설정자)
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
//  Too soon!
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//  4. Static properties and methods
//  Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 상속과 다양성
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();   // 부모함수 호출
       console.log("🔺"); 
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log("6. Class checking: instanceOf");
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

console.log(triangle.toString());

 
function calculate (command, a, b) {
    switch(command) {
        case 'add':
            console.log(a + b);
            break;
        case 'subtract':
            console.log(a -b);
            break;
        default:
            console.log('알수없음');
            break;        
    }  
}

calculate('add', 3, 5);

function Item(title, price) {
    // this = {};
    this.title = title;
    this.price = price;
    this.showPrice = function () {
        console.log(`${this.title} 의 가격은 ${this.price} 입니다`);
    }
    // return this;
}

const item1 = new Item('인형', 3000);
const item2 = new Item('가방', 4000);
const item3 = new Item('지갑', 9000);

console.log(item1, item2, item3);


let n = "name";
let a = "age";

const user = {
    [n] : 'Mike',
    [a] : 30,
    [1 + 4] : 5,
};

console.log(user);

function makeObj(key, val) {
    return {
        [key]: val,
    }
}

const obj = makeObj("나이", 33);

console.log(obj);

const user = {
    name: "Mike",
    age: 30,
};

// Object.assign({초기값}, 복사할 객체); 객체를 복사할때 사용하는 명령어
const user2 = Object.assign({}, user); 

user2.name = "ellie";
console.log(user);
console.log(user2);

// Object.keys() 키 배열로 반환
const result = Object.keys(user);
console.log(result);

// Object.values() 값 배열로 반환
const result2 = Object.values(user);
console.log(result2);

// Object.entries() 키와 값을 배열로 반환
const result3 = Object.entries(user);
console.log(result3);

// Object.fromEntries() 키와 값 배열을 객체로 반환
const result4 = Object.fromEntries(result3);
console.log(result4);

let list = [
        "01. 들어가며",
        "02. JS의 역사",
        "03. 자료형",
        "04. 함수",
        "05. 배열",
];

let newList = [];
for(let i = 0; i < list.length; i++) {
    newList.push(list[i].slice(4));
}

console.log(newList);

// 금칙어 : 콜라
// includes
// 문자가 있으면 true
// 없으면 false 반환

function hasCola(str) {
    if(str.indexOf('콜라') > -1) {
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과');
    }
};

hasCola("와 사이다가 짱이야!"); // -1
hasCola("무슨소리, 콜라가 짱이야!");
hasCola("콜라");   // 0

function hasCola(str) {
    if(str.includes('콜라')) {
        console.log('금칙어가 있습니다.');
    } else {
        console.log('통과');
    }
};

hasCola("와 사이다가 짱이야!"); // -1
hasCola("무슨소리, 콜라가 짱이야!");
hasCola("콜라");   // 0

// forEach
let arr = ["Mike", "Tom", "Jane"];

arr.forEach((name, index, array) => console.log(name, index, array));

{ // 스케줄 setInterval
    function showName(name) {
        console.log(name);
    }
    const tId = setInterval(showName, 3000, 'Mike');
    clearInterval(tId);
}

{
    let num = 1;
    function showTime() {
        console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
        if (num > 5) {
            clearInterval(tId);
        }
    }
   const tId = setInterval(showTime, 1000);
}

{ // call 메서드는 모든 함수에서 사용가능, this를 특정값으로 지정할수있음
    const mike = {
        name: "Mike",
    };
    
    const tom = {
        name: "Tom",
    };

    function showThisName() {
        console.log(this.name);
    }

    showThisName();  // this 는 window을 가리킴
    showThisName.call(mike);

    function update(birthYear, occupation) {
        this.birthYear = birthYear;
        this.occupation = occupation;
    };

    update.call(mike, 1999, 'singer');
    console.log(mike);
    // apply 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같음
    // call 일반적인 함수와 마찬가지로 매개변수를 직접받지만,
    // apply 매개변수를 배열로 받습니다
    // 첫번째 매개변수는 this를 가리킴

    update.apply(tom, [2000, 'teacher']);
    console.log(tom);

// bind 함수의 this 값을 영구히 바꿀 수 있습니다
    const updateMike = update.bind(mike);
    updateMike(1980, 'police');
    console.log(mike);


    const nums = [3, 10, 1, 6, 4];
    // const minNum = Math.min(...nums); // ... 스프레드 연산자
    // const maxNum = Math.max(...nums);

    const minNum = Math.min.apply(null, nums);
    // = Math.min.apply(null, [3, 10, 1, 6, 4])

    const maxNum = Math.max.call(null, ...nums);
    // = Math.max.call(null, 3, 10, 1, 6, 4)

    console.log(minNum, maxNum);
}

{
    const user = {
        name: "Mike",
        showName: function () {
            console.log(`hello, ${this.name}`);
        },
    };

    user.showName();
    let fn = user.showName;

    fn.call(user);
    fn.apply(user);

    let boundFn = fn.bind(user);

    boundFn();
}

{ // Generator 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
    // next(), return(), throw()
    function* fn(){
        console.log(1);
        yield 1;
        console.log(2);
        yield 2;
        console.log(3);
        yield 3;
        return "finish";
    }
    const a = fn();
    // a.next();
    for(let num of a) {
        console.log(num);
    }
}

{
    function makeObject(name, age) {
        return {
            name,
            age,
            hobby: "football"
        };
    }

    const mike = makeObject('mike', 30);
    for(let key in mike) {
        console.log(key, mike[key]);
    }
}

{
    const user = {
        name : 'Mike',
        sayHello: function(){
            console.log(`Hello, I'm ${this.name}`);
        }
    }
    user.sayHello();
}

{
    let numbers = [1,2,3,4,5];
    for(let num of numbers) {
        console.log(num);
    }
    console.log('--------------------------------')
    numbers.forEach((value)=> console.log(value));
}

{
    let days =['mon', 'tue', 'wed'];

    days.push('thu');
    days.unshift('sun');

    // console.log(days);
    for(let index = 0; index < days.length; index++) {
        console.log(days[index]);
    }
    console.log('-----');
    for(let day of days) {
        console.log(day);
    }
}

{
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.sayName = function(){
            console.log(this.name);
        }
    }
    let user1 = new User('Mike', 30);
    let user2 = new User('Jane', 22);
    let user3 = new User('Tom', 17);
    console.log(user1);
    user1.sayName();

    // 생성자 함수 : 상품 객체를 생성해보자
    function Item(title, price) {
        // this =();
        this.title = title;
        this.price = price;
        this.showPrice = function(){
            console.log(` 상품 ${this.title} 가격은 ${this.price} 입니다.`);
        }
        // return this;
    }
    const item1 = new Item('인형', 3000);
    item1.showPrice();
}

{
    const user = {
        name : 'Tom',
        age : 30,
    }

    const obj = Object.assign({gender : 'male'}, user); // 오브젝트 복사
    console.log(obj);
    console.log(Object.keys(user));  // 키를 배열 변환
    console.log(Object.values(user)); // 값을 배열변환
    console.log(Object.entries(user));  // 키 /값 배열변환
    const user2arr = Object.entries(user);  
    console.log(Object.fromEntries(user2arr));  //  배열을 오브젝트로 변환
}
{
    let n = "name";
    let a = 'age';

    const user = {
        [n] : 'mike',
        [a] : 30,
        [1+5] : 5,
    }

    console.log(user);

    function makeObj(key, val) {
        return {
            [key] : val,
        }
    }
    const obj = makeObj('나이', 33);
    console.log(obj);

    let arr = [
        ['mon', '월'],
        ['tue', '화']
    ];
    const result = Object.fromEntries(arr);
    console.log(result);
}
