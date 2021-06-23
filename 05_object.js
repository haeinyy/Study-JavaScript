const user = {
    name: 'Bill',
    age: 20,
    hasCar: true
}
console.log('name' in user); // true
console.log('age' in user); // true
console.log('random' in user); // false
console.log(user.hasCar); // true
console.log(user.random);
if (user.random == undefined) {

}

const obj = {
    'pizza': '🍕',
    'chicken': '🍗',
    'meat': '🍖'
};



// obj[key] 를 해야 value를 얻을수 있음
// obj.key 하면 안됨

for (key in obj){
    console.log(key, obj.key, obj[key]);
}

// value 확인은 iterable 자료형 일때 적용 가능
for (value of obj){
    console.log(value);
}
