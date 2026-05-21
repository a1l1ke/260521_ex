// 변수 : 특정한 메모리에 저장되어 있는 값을 호출하기 위해서 사용하는 호칭
name = "윌리엄"; // "" : 문자열(텍스트)을 표현하기 위한 문법
// "" -> 이걸 안쓰면 '변수취급됨'
console.log(name);
// let 키워드
// console.log(foo); // Cannot access 'foo' before initialization
let foo; // let 변수명 -> '변수명'으로 메모리에 장소를 만들겠다 (선언 : declaration)
console.log(foo); // undefined
foo = 1; // 할당/대입 (assignment) / 정의 : definition
let bar = 10; // 선언+할당(정의) -> 초기화 (initialization)
console.log(foo); // foo <- 1
console.log(bar); // bar <- 10
// 재할당 O, 재선언 X
foo = 100;
// let foo; // Cannot redeclare block-scoped variable 'foo'.ts(2451)
console.log(foo); // foo <- 100
