function multiplyBy5(params) {
    return params * 5
}

multiplyBy5.power = 3

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.score}`);
}

const user = new createUser('Saqulain', 21)
const user2 = new createUser('Raza', 270)

user.printMe()
user2.increment()