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
    'pizza': 'π',
    'chicken': 'π',
    'meat': 'π'
};



// obj[key] λ₯Ό ν΄μΌ valueλ₯Ό μ»μμ μμ
// obj.key νλ©΄ μλ¨

for (key in obj){
    console.log(key, obj.key, obj[key]);
}

// value νμΈμ iterable μλ£ν μΌλ μ μ© κ°λ₯
for (value of obj){
    console.log(value);
}
