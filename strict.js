"user strict";
let user = document.getElementById("user");
let text = "hello JavaScritp";
user.textContent = text;

// let accessAllowed;
// let age = prompt("나이를 입력하세요?", "");

let age_Id = document.getElementById("age");
// console.log(age_Id);
// if (age > 18) {
//   accessAllowed = true;
//   age_Id.textContent = accessAllowed;
// } else {
//   accessAllowed = false;
//   age_Id.textContent = accessAllowed;
// }

// let age = prompt("나이를 입력해주세요?", 18);
// let message =
//   age < 3
//     ? "아가야 안녕?"
//     : age < 18
//     ? "안녕!"
//     : age < 100
//     ? "환영합니다"
//     : "나이가 아주 많거나 잘못된 값을 입력하셨습니다";

// alert(message);

// let Begin = prompt("자바스크립트의 공식이름은?", "");
// if (Begin == "ECMAScript") {
//   alert("정답입니다");
// } else {
//   alert("틀렸습니다");
// }

// let Number = prompt("숫자를 입력해주세요?", "");

// if (Number > 0) {
//   alert(1);
// } else if (Number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let login = prompt("로그인?", "");
// let message =
//   login == "직원"
//     ? "안녕하세여"
//     : login == "임원"
//     ? "환영합니다"
//     : login == ""
//     ? "로그인이 필요합니다"
//     : "";

// alert(message);

// ||(or연산자) 둘중에 하나라도 참이면 '참'
// alert(true || true); // true
// alert(false || true); // true
// alert(false || false); // false
// alert(true || false); // true

// let hour = 9;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//     alert("영업시간이 아닙니다."); // 주말이기 때문임
// }

// and(&&) 모두 참일때 true;
// alert(true && true); // true
// alert(false && true); // false
// alert(false && false); // false

// let age = 14;

// if (14 <= age <= 90) { // (age >= 14 && age <= 90)
//   alert("안녕하세요");
//   alert(age);
// }

// let userName = prompt("사용자 이름을 입력해주세요.", "");

// if (userName == "Admin") {
//   let pass = prompt("비밀번호:", "");

//   if (pass == "TheMaster") {
//     alert("환영합니다!");
//   } else if (pass == "" || pass == null) {
//     alert("취소되었습니다.");
//   } else {
//     alert("인증에 실패하였습니다.");
//   }
// } else if (userName == "" || userName == null) {
//   alert("취소되었습니다.");
// } else {
//   alert("인증되지 않은 사용자입니다.");
// }

// let num;

// do {
//     num = prompt("100을 초과하는 숫자를 입력", '0');
// } while (num <= 100 && num);

// let a = 2 + 2;

// switch (a) {
//     case 3:
//         alert(`비교하려는 값 ${a}보다 작습니다`);
//         break;
//     case 4:
//         alert(`비교하려는 값 ${a} 와 일치합니다`);
//         break;
//     case 5:
//         alert(`비교하려는 값 ${a} 보다 큽니다`);
//         break;
//     default:
//         alert("어떤값인지 파악이 되지 않습니다.");
//         break;
// }

// let browser = "Chrome";

// if (browser == "Edge") {
//   alert("Edge를 사용하고 계시네요");
// } else if (browser == "Chrome" || "Firefox" || "Safari" || "Opera") {
//   alert("저의 서비스가 지원하는 브라우저");
// } else {
//   alert("현재 페이지가 괜찮아 보이길 바랍니다");
// }

// let a = +prompt("a?", "");

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2,3");
//     break;
//   default:
//     alert("알수가 없습니다");
//     break;
// }

// function showMessage() {
//     alert('안녕하세요!');
// }

// showMessage();

// function checkAge(agd) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return confirm('보호자의 동의를 받으셨나요?');
//     }
// }

// let age = prompt('나이를 알려주세요', 18);

// if (checkAge(age)) {
//     alert('접속 허용');
// } else {
//     alert('접속 차단');
// }

// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(2, 5) == 2);
// console.log(min(3, -1) == -1);
// console.log(min(1, 1) == 1);

// x의 n제곱을 반환해주는 함수, pow(x,n)를 만들어보세요. x의 n 제곱은 x를 n번 곱해서 만들 수 있습니다.

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//     console.log(result);
//   }

//   return result;
// }

// let x = prompt("x?", "");
// let n = prompt("n?", "");

// if (n < 1) {
//   alert(`${n}은 양의 정수이어야 합니다.`);
// } else {
//   alert(pow(x, n));
// }

// arrow function (화살표 함수)
// let ask = (question, yes, no) => {
//   if (confirm(question)) yes()
//   else no();
// }

// ask("동의하십니까?", () => alert("동의하셨습니다.") , () => alert("취소버튼"));

// let age = prompt('나이를 입력하세요', 18);
// switch (age) {
//   case 18:
//     alert("Won't work");
//     break;
//   case "18":
//     alert("낭랑 18세이시군요");
//     break;
//   default:
//     alert("어떤 case문에도 해당하지 않습니다");
// }





