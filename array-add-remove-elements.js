let touristSpot=['cox-bazar','st-martin','bandorban']
console.log('we will go to:',touristSpot)
touristSpot.push('khangrachori')
console.log('after adding new spot:',touristSpot)
touristSpot.push('kaptai-lake','shuvolong-hill')
console.log('after adding another two spot:',touristSpot)
touristSpot.pop()
console.log(' after removing last element:',touristSpot)


//shift-unshift-->

let num=[2,5,7,3,5,1,9]
console.log('original array :',num)
num.shift()   //remove the 1st element from this array
console.log('after remove :',num)
num.unshift(100)   //add element on 1st position on array
console.log('after add :', num)


//splice-->

let friends=['monwar','hossan','himel','abu','jafar','mamun','mahdi']
console.log(friends)
friends.splice(2,3)  // 2 no. index theke 3 item remove korbe.
console.log(friends)
friends.splice(2,2,'al','mal') 
console.log(friends)
