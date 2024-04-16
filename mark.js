const prompt = require('prompt-sync')()

let sum=0;
let avarage=0;
let number;
let status;
for(let i =0 ; i<3; i++){
    number = prompt(`Enter mark ${i + 1} :`);
     number = parseFloat(number);

     sum += number;
}
     

avarage = Math.round(sum/3);

console.log(`sum is : ${sum}`);
console.log(`avarage is : ${avarage}`);


if(avarage<50){
    status = 'Fail';
}
else if (avarage >= 50 && avarage < 75){
    status = 'Pass'
    
}
else if (avarage >=75 && avarage < 100){
   status = 'Pass with distionction';
}
else{
    status = 'Check your input'
}

console.log(`You got ${avarage} and your status is ${status}`);

