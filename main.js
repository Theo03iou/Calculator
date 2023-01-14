// let num1 = 5;
// let num2 = 100;


let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;


console.log(add(5000, 300));
console.log(subtract(5000, 300));
console.log(multiply(5000, 300));
console.log(divide(5000, 300));

let test = function() {
    console.log("fasefasefasef");
}

let test1 = document.querySelectorAll('.number');
test1.forEach(number => {
    number.addEventListener('click', test)
})

