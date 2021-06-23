// <증가연산자>
// let counter = 2;
// const preIncrement = ++counter;

// ++counter
// 


// <논리연산자>
// const value1 = true;
const value1 = false;
const value2 = 4 < 2;
// true를 찾으면 true 반환하며 종료
console.log(`or: ${value1 || value2 || check()}`);
// false를 찾으면 false 반환하며 종료
console.log(`and: ${value1 && value2 && check()}`);
function check() {
    for (let i = 0; i < 10; i++) {
        console.log('pass');
    }
    return true;
}
console.log(!value1);


// <연산계산>
let fTemp = 122;
let cTemp = (fTemp - 32) * 5 / 9

console.log(cTemp)


// <% 이용>
let num1 = 456;
let num2 = 111;

// 456 -> 400
// 방법 1
num1 = num1 - (num1 % 100)
// 방법 2
num1 = parseInt(num1 / 100) * 100 // 페이지를 나눠서 보여줄때 사용

// 111 -> 100
num2 = num2 - (num2 % 100)
num2 = parseInt(num2 / 100) * 100

console.log(`${num1}, ${num2}`)


// <각 자리 합>
let num = 12345;
let total = 0;

// 끝이 정해져 있지 않을때 => while
while (true) {
    let n1 = num % 10
    num = parseInt(num / 10)
    total += n1
    if (num == 0) { break }
}

console.log(total)

/*
// 이거 반복시키기
let n1 = num % 10; //5
num = parseInt(num / 10); // 1234

console.log(n1)
console.log(num)
*/


// <제어문>
let rand = Math.random();
console.log(rand);


const date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("현재시각 : " + hour + "시 " + min + "분 " + sec + "초");
if (hour < 12) {
    console.log("아침");
} else if (hour < 15) {
    console.log("점심");
} else {
    console.log("저녁");
}


// <제어문2>
let total2 = 0;
for (let i=1; i<=100; i+=1){
    if (i%2 == 0){
        total2 += i;
    }
}
console.log(total2)


// <제어문3>
// js는 문자열+문자열 / 문자열+상수 다 가능
for (let i=1; i<=5; i++){
    let temp = '';
    for (let j=1; j<=i; j++){
        temp += '*';
    }
    console.log(temp)
}

/*
let start = '';
for (let i =1; i<6; i+=1){
    start += '*'
    console.log(start)
}
*/


// <함수>
const abc = console.log
abc('hello')


// 변수에 담아서 함수 쓸수있음
const f = function(){
    document.write('1')
}
setInterval(f,1000)