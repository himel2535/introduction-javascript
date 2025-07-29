const weight=90;
const height=1.67;
bmi=weight/(height^2);
if (bmi<18.5){
    console.log('u r underweight')
}
else if (bmi <= 24.9 ){
    console.log('u r normal')
}
else if (bmi <=29.9){
    console.log('u r overweight')
}
else{
    console.log('u r obese')
}