let numbers = {
    
    value: "",
    isComplete: false, 
};

let num1 = "";
let num2 = "";
let num1Complete = false
let num2Complete = false

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
        if (numbers.isComplete = false) {
            num1 += number.innerHTML
            console.log(num1);    
        } else {
            num2 += number.innerHTML;
            console.log(num2);
        }
        
    })
})

let signClass = document.querySelectorAll('.sign');
signClass.forEach(sign => {
    sign.addEventListener('click', function(e){
        e.preventDefault()
        console.log(sign.innerHTML)
        numbers.isComplete = true
    })
})

let equalsClass = document.querySelectorAll('.equals');
equalsClass.forEach(equals => {
    equals.addEventListener('click', function(e) {
        e.preventDefault()
        console.log(equals.innerHTML);
    })
})