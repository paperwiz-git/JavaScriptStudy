// Q1. make a string out of an array
{ // join 합치다 string로 변환
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
  }
  
  // Q2. make an array out of a string
  { // split 분열(분리) 시키다 배열로 만듬
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  { // sort , reverse 반대로(배열자체를 변경시킴)
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    array.sort((a, b) => a - b);  // 오름 차순 정렬
    array.sort((a, b) => b - a);  // 내림 차순 정렬 
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  { // splice(start index, delcounter)삭제값만 생성 , slice(start index, endindex +1) 남은 새로운 배열 생성
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(0,2);  // 배열자체 수정
    const result = array.slice(2, 5); // [3, 4, 5] 원하는 부분만 리턴해줌
    console.log(`result: ${result}`); 
    console.log(`array: ${array}`);  // 원본 안건드림
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {  // find
    // function isNineTeen(element) {
    //     if(element.score === 90) {
    //         return true;
    //     }
    // }
    // const nineTeen = students.find(isNineTeen);
    // console.log(nineTeen.name, nineTeen.score);
    const result = students.find(student => student.score === 90);
        // console.log(student, index);
    console.log(result);
  }
  
  // Q6. make an array of enrolled students
  { // filter
    //   function isEnrolled(element) {
    //       if(element.enrolled === true) {
    //           return true;
    //       }
    //   }
    //   const enrolled = students.filter(isEnrolled);
    //   console.log(enrolled);
    const result = students.filter(student => student.enrolled);
    console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  { // map
    const result = students.map(student => student.score);
    console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  { // some - 특정 조건을 만족하는지 배열 내부의 원소를 순회하면서 1개라도 맞으면 true
   // every - 모든 조건을 만족하는지 배열 내부의 원소를 순회하면서 1개라도 틀리면 false
    const result = students.some(student => student.score < 50);
    console.log(result); // true

    const result2 = !students.every(student => student.score >= 50);
    console.log(result2); // true
  }
  
  // Q9. compute students' average score
  { // reduce - 배열을 돌면서 값을 누적할때 사용
    // const result = students.reduce((prev, curr) => {
    //         console.log('------');
    //         console.log(prev);
    //         console.log(curr);
    //         return prev + curr.score;
    // }, 0);

    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  { // map, join
      const result = students.map(student => student.score).join();
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    // const result = students
    // .map(student => student.score)
    // .filter(score => score >=  50)
    // .join();
    // console.log(result);
    const result = students
    .map(student => student.score)
    .sort((a, b) => a - b)  // 내림 차순
    .join();
    console.log(result);
  }