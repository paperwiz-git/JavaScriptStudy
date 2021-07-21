// 1. use strict 
//  added in ES 5
//  use this for Valina JavaScript.
'use strict';

/*
 2. Variable, rw ( read/write )
 let (added in ES6)
*/
let globalName = 'global name';

{
    let name = "ellie";
    console.log(name);
    name = "hello";
    console.log(name);
    console.log(globalName);
}

console.log(name);
console.log(globalName);
//  type script
// let a: number = 12;
// let b: number = 1.2;
/*
3. Constant, r(read only)
use const whenever possible.
only use let if variable needs to change.
*/
const daysInWeek = 7;
const maxNumber = 5; 
/*
Note!
Immutable data types: primitive types, frozen objects(i.e. object,freeze())
Mutable data types: all objects by default are mutable in JS
favor immutable data type always for a few reasons:

4. Variable types
primitive, single item: number, string, boolean, null, undefined, symbol
object, box container
function, first-class function
favor immutable data type always for a few reasons:
    - security
    - thread safety
    - reduce human mistakes

*/

const count = 17; // integer 숫자
const size = 17.1;  // decimal number 소수
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number type
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet) 숫자 끝에 'n'
const bigInt = 1234567890123456789012345678901234567890n;  // over(-2**53 ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


// string 문자 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
const helloBob = `hi ${brendan}!`; // template literals(string)

console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 텅텅 비어있는값 empty값
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);  //type object

// undefined 선언은 했지만 아무런 값도 정의되어 있지 않음
let x;  // let x = undefined 같음
console.log(`value: ${x}, type: ${typeof x}`);  //type undefined

// symbol, create unique identifiers for objects 고유한 식별자
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2);  // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);  // true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// objec, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;
console.log(ellie);
console.log(ellie.age);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);  // type string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);  // type number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);  // type string '75'
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // type number 4




