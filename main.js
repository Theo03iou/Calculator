let numbers = {
    value: "",
    isComplete: false,
    sign: "", 
};

let num1 = "";
let num2 = "";
let num1Complete = false
let num2Complete = false


let numberClass = document.querySelectorAll('.number');
numberClass.forEach(number => {
    number.addEventListener('click', function(e) {
        e.preventDefault()
        if (numbers.isComplete == false) {
            num1 += number.textContent
            resultScreenClass.textContent = num1
            console.log(num1);    
        } else {
            num2 += number.textContent;
            resultScreenClass.textContent = num2
            console.log(num2);
        }
        
    })
})

let signClass = document.querySelectorAll('.sign');
signClass.forEach(sign => {
    sign.addEventListener('click', function(e){
        e.preventDefault()

        if (numbers.sign == "+") {
            let add = (num1, num2) => num1 + num2;
            num1 = add(Number(num1), Number(num2)).toString();
            num2 = ""
            console.log(num1);
            resultScreenClass.textContent = num1
        }

        if (numbers.sign == "-") {
            let subtract = (num1, num2) => num1 - num2;
            num1 = subtract(Number(num1), Number(num2)).toString();
            num2 = ""
            console.log(num1);
            resultScreenClass.textContent = num1

        }

        if (numbers.sign == "x") {
            let multiply = (num1, num2) => num1 * num2;
            num1 = multiply(Number(num1), Number(num2)).toString();
            num2 = ""
            console.log(num1);
            resultScreenClass.textContent = num1

        }

        if (numbers.sign == "÷") {
            let divide = (num1, num2) => num1 / num2;
            num1 = divide(Number(num1), Number(num2)).toString();
            num2 = ""
            console.log(num1);
            resultScreenClass.textContent = num1

        }    
        console.log(sign.innerHTML)
        numbers.isComplete = true
        numbers.sign = sign.innerHTML   
    })
})

let resultScreenClass = document.querySelector(".resultResult")
let equalsClass = document.querySelectorAll('.equals');
equalsClass.forEach(equals => {
    equals.addEventListener('click', function(e) {
        e.preventDefault()
        console.log(equals.innerHTML);
        console.log(numbers.sign);
        
        if (numbers.sign == "+") {
            let add = (num1, num2) => num1 + num2;
            num1 = add(Number(num1), Number(num2)).toString();
            num2 = ""
            console.log(num1);
            resultScreenClass.textContent = num1
        }

        if (numbers.sign == "-") {
            let subtract = (num1, num2) => num1 - num2;
            num1 = subtract(Number(num1), Number(num2)).toString();
            num2 = ""
            console.log(num1);
            resultScreenClass.textContent = num1

        }

        if (numbers.sign == "x") {
            let multiply = (num1, num2) => num1 * num2;
            num1 = multiply(Number(num1), Number(num2)).toString();
            num2 = ""
            console.log(num1);
            resultScreenClass.textContent = num1

        }

        if (numbers.sign == "÷") {
            let divide = (num1, num2) => num1 / num2;
            num1 = divide(Number(num1), Number(num2)).toString();
            num2 = ""
            console.log(num1);
            resultScreenClass.textContent = num1

        }
    })
})

let clearClass = document.querySelector('.clear');
clearClass.addEventListener('click', function(e) {
    e.preventDefault()
    num1 = "";
    num2 = "";
    resultScreenClass.textContent = 0

})
