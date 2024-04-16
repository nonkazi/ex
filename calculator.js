const prompt = require('prompt-sync')()
var num1 ,num2 ,answer =0;
var operator;


num1 = parseFloat(prompt("enter num 1 :"));

num2 = parseFloat(prompt("enter num 2 :"));

operator = prompt("enter operator (+,-,*,/) :");


switch(operator){
    case '+':
        answer = num1 + num2;
        console.log(`${num1} + ${num2} = ${answer}`);
        break;

    case '-':
        answer = num1 - num2;
        console.log(`${num1} - ${num2} = ${answer}`);
        break;

    case '*':
        answer = num1 * num2;
        console.log(`${num1} * ${num2} = ${answer}`);
        break;

    case '/':
        answer = num1 / num2;
        console.log(`${num1} / ${num2} = ${answer}`);
        break;

    default:
            console.log("undefined")

}


