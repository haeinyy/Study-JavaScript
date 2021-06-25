// #################################################################
// Callback
// #################################################################
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        // id, password를 서버로 전송하여 가입정보 인증
        setTimeout(() => {
            if ((id === 'java' && password === 'script') ||
                (id === 'call' && password === 'back')) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(id, onSuccess, onError) {
        // 로그인 성공 시 id를 서버로 전송하여 권한 확인
        setTimeout(() => {
            if (id === 'java') {
                onSuccess({ id: 'java', role: 'admin' });
            } else if (id === 'call') {
                onSuccess({ id: 'call', role: 'manager' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = 'java';
const password = 'script';
// 단점
// 가독성 떨어짐 (구조가 복잡함)

const s = function (id) {
    // 인증 성공
    // 사용자 권한 확인 - getRoles() 호출
    userStorage.getRoles(id, (user) => {
        alert(
            `Hello ${user.id}, you have a ${user.role}`)
    }, (error) => { // 사용자 권한 확인 실패
        console.log(error);
    })
}

userStorage.loginUser(id, password, s, function (error) { console.log(error); }); // error : 인증 실패
// #################################################################


// #################################################################
// Promise
// #################################################################
const promise = new Promise((resolve, reject) => {
    console.log('작업중...');
    setTimeout(() => {
        resolve('작업완료');
        // reject(new Error('응답없음'));
    }, 2000);
});
console.log(promise);

// reslove 는 then 에서, reject 는 catch에서 처리
promise.then(function (result) {
    console.log(`promise result ${result}`);
}).catch()

console.log('End');
// #################################################################


// #################################################################
// async / await
// #################################################################
// await 를 쓰기 위해서는 promise나 함수앞에 async를 붙여야 한다
//#################################################################
function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍎');
        }, 1000)
    });
}
function getKiwi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🥝');
        }, 1000)
    });
}

async function sell() {
    const apple = await getApple();
    const kiwi = await getKiwi();
    return `${apple} + ${kiwi}`
}
sell().then(res => console.log(res));

// function sell() {
//     getApple().then(apple => console.log(apple));
//     getKiwi().then(kiwi => console.log(kiwi));

// }
// sell()
// #################################################################


// async function sell() {
//     const applePromise = getApple();
//     const kiwiPromise = getKiwi();
//     const apple = await applePromise;
//     const kiwi = await kiwiPromise;
//     return `${apple} + ${kiwi}`;
// }
// sell()