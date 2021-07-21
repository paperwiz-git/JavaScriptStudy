// "use strict";
const ja = { name: "dong", age: 35, hobby: "program" };

console.log(ja);

const param1 = {
    "fruit": "Apple",
    "size": "Large",
    "color": "Red"
};

for ( const key in param1 ) {
    console.log(`key:${key} / value:${param1[key]}`);
}
const requestURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  

const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const superHeroes = request.response;
    populateHeader(superHeroes);
    showHeroes(superHeroes);
}
console.log(request);