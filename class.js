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


