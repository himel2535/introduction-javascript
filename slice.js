// slice-->
const address='andorkilla'
const part = address.slice(2,5);
console.log(part);

//splite-->

const sentence=" i am bangldeshi and bangali "
console.log(sentence.split(' '))


const s=" i am bangldeshi and bangali "
console.log(s.split('b'))

const fname= "rahim,karim,fahim,jarim"
console.log(fname.split(','))

//join -->
let friendName=['himel','monwar','anwar','jafar'];
console.log(friendName.join(' +   '))

//concat-->
const first="monwar"
const last="hossan"
const nick="himel"
const fullname=first+' '+last;
console.log(fullname)
const fName=first.concat(' ').concat(last,' ',nick);
console.log(fName)


//includes-->
console.log(last.includes('h'))