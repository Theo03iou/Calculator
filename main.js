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



let numberClass = document.querySelectorAll('.number');
numberClass.forEach(number => {
    number.addEventListener('click', function(e) {
        e.preventDefault()
        console.log(number.innerHTML);
    })
})

let signClass = document.querySelectorAll('.sign');
signClass.forEach(sign => {
    sign.addEventListener('click', function(e){
        e.preventDefault()
        console.log(sign.innerHTML)
    })
})

let equalsClass = document.querySelectorAll('.equals');
equalsClass.forEach(equals => {
    equals.addEventListener('click', function(e) {
        e.preventDefault()
        console.log(equals.innerHTML);
    })
})