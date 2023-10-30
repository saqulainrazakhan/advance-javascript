const promiseOne = new Promise((resolve, reject) => {
    // Do any async task
    // DB calls, cryptography, network call
    setTimeout(() => {
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log('Promise consumed');
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(() => {
    console.log('Async 2 resolved');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: 'saqulain', email: 'example@gmail.com' })
    }, 1000)
})

promise3.then((user) => {
    console.log(user);
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: 'Saqulain', password: '234' })
        } else {
            reject('ERROR: Something went wrong')
        }

    }, 1000)
})

promise4
    .then((user) => {
        console.log(user);
        return user.username
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('The promise either resolved or rejected');
    })


const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: 'JavaScript', password: '234' })
        } else {
            reject('ERROR: JS went wrong')
        }

    }, 1000)
})

async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise5()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: error');
//     }
// }

// getAllUsers()

/* A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties. */

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log('ERROR:', err);
    })