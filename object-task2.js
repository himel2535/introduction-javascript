const car ={
    make:'toyota',
    model:'corolla',
    year:2020
}
let key='passanger capacity';
car[key]=6;
// console.log(car);

const prop = 'color';
car[prop]='red';
// console.log(car);

car['wheel']=4;
console.log(car);