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