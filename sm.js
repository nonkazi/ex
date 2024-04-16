const prompt = require('prompt-sync')()

let sum=0;
let avarage=0;
let number;
let status;
let name;

for (let x = 0; x<3 ;++x)
{
    name = prompt(`Please enter the name of person number ${x + 1} :`)
for(let i =0 ; i<3; ++i){
    mark = prompt(`Enter mark ${i + 1} for ${name}:`);
     mark = parseFloat(mark);

     sum += mark;
     avarage = Math.round(sum/3);

     

}
     




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


console.log(` ${avarage} and your status is ${status}`);

}