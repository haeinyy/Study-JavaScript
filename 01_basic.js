const data = [
    {
        "address": [
            "서울",
            "신림"
        ],
        "age": 10,
        "name": "A"
    },
    {
        "address": [
            "대전",
            "탄방"
        ],
        "age": 11,
        "name": "B"
    },
    {
        "address": [
            "부산",
            "해운대"
        ],
        "age": 12,
        "name": "C"
    }
]

// parsing 과정
console.log(data[0]['name'])
console.log(data[1]['name'])


// 반복문으로 뽑기
for (let i=0; i<data.length; i++){
    console.log(data[i]['name'])
}

// 요소 하나씩 뽑아서 적용! 파이썬이랑 비슷
for(let i of data){
    console.log(i)
}