const array = [];
array[0] = 'A';
array[100] = 'A100';
array['키'] = '값';
console.log(array.length);
console.log(array['키']);


// map 써보기
const arr = [1,2,3,4,5];
// fucntion(파라미터, 인덱스, 데이터 전체)
// fucntion(파라미터) 형식이 제일 많이 쓰임!
const func = function(v,a,b){
    console.log(v,a,b);
    return v**2;
};

// 데이터.map(함수)
const arr2 = arr.map(func)
console.log(arr2);