let age = 68;
let price = 800;

if(age<10){
    console.log('free for journey')
}
else if(age<=25 && age>=15){
    discount = price*50/100;
    afterDiscount=price-discount;
    console.log(afterDiscount)
}
else if(age>=60){
    discount = (price*15)/100;
    afterDiscount= price-discount;
    console.log(afterDiscount)
}
else{
    console.log('regular ticket price=' + price )
}