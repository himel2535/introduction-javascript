let family=['abba','amma','ami','vai','bon']
console.log(family)
console.log(family.includes('bou'))
console.log(family.includes('ami'))



let friends=['himel','jafar','ataor','mahdi','adib','nijhum']

if(friends.includes('nijhum')){
    console.log('i will never go on this spot')
}
else{
    console.log('as ur wish as well as')
}


let funboy=['himel','jafar','ataor','mahdi','adib','nijhum']

console.log('Funboy Are:',funboy)
console.log('index of finders',funboy.indexOf('ataor'))
console.log(funboy.indexOf('moja'))

console.log(Array.isArray(funboy))
const food='ros o gol a'
console.log(Array.isArray(food))

console.log(funboy.join(' + '))