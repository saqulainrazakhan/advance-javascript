// Object literal

const user = {
    username: 'Saqulain',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log('Got user details from database');
        console.log(`Username: ${this.username}`);
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
user.getUserDetails()

// Constructor function

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User('Saqulain', 12, true)
const userTwo = new User('Raza', 11, false) // If we do not use new keyword then it overrides the older instance
console.log(userOne.constructor);
console.log(userTwo);

