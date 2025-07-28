
// normal if-else
/*
const age = 20;
if (age>=18){
    console.log('u can vote now')
}
else{
    console.log('u are baby now')
}
*/

// ternary if-else

/*
const age =27;
age>=18 ? console.log('u can vote now') : console.log('u r bby right now')
*/
/*
let price=500;
const isLeader=false;
if (isLeader==true){
    price=0;
}
else{
    price=price+100;
}
console.log(price)
*/
/*
let price = 500;
const isLeader=true;
*/
/*
isLeader==true ? console.log(price=0) : console.log(price=price+100);
*/
/*
price = isLeader==true ? 0 : price=price+100;
console.log(price)
*/
/*
let price = 1200;
const isLeader=true;

if(isLeader==true){
    if(price>=1000){
        price=price/2;
    }
    else{
        price=0;
    }
}
else{
    price=price+100;
}
console.log(price)
*/

let price = 5000;
const isLeader=true;

price = isLeader==true? 
    price >=1000 ? 
        price=price/2 :
    0  : 
price=price+100;

console.log(price)

