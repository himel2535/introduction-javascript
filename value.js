const person = {
    name : 'sodor mia',
    age : 25,
    proffession : 'developr',
    salary : 25000,
    married : true,
    'fav places' : ['kuakata','bandarban','cox-bazar']
}
person.salary=50000;
person['age']=30;
console.log(person);
person['fav places']=['maldives','thailand']
console.log(person)

const keyName='proffession';
console.log(person[keyName])
person[keyName]='devops'
console.log(person)